package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaMaterias;
import com.puggysoft.dtos.escuela.DtoEscuelaMateriasFilter;
import com.puggysoft.entities.escuela.EntityEscuelaMaterias;
import com.puggysoft.tools.escuela.SqlEscuelaMateriasFilterBuilderNative;

import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 * Services for filter.
 */
@Service
public class ServiceEscuelaCursosMateriasDocentesGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoEscuelaMaterias>> filter(
      DtoEscuelaMateriasFilter dtoFilter,
      int page,
      int size,
      String docente,
      String curso,
      boolean contains
  ) {
    List<EntityEscuelaMaterias> listEntities;
    String fullQuery;
    String queryFilter = SqlEscuelaMateriasFilterBuilderNative.build(dtoFilter);
    int off = page * size;
    if (queryFilter != null && !queryFilter.trim().isEmpty()) {
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      queryFilter = "AND " + queryFilter;
    }

    if (contains) {
      fullQuery = "SELECT "
          + "escuela_cursos_materias_docentes.id, "
          + "escuela_materias.name, "
          + "escuela_materias.short_name, "
          + "escuela_materias.nota_maxima, "
          + "escuela_materias.tenant, "
          + "escuela_materias.created_by, "
          + "escuela_materias.updated_by, "
          + "escuela_materias.creation_date, "
          + "escuela_materias.update_date "
          + "FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias_docentes ON escuela_cursos_materias_docentes.materia = escuela_materias.short_name "
          + "WHERE escuela_cursos_materias_docentes.curso = :curso "
          + "AND escuela_cursos_materias_docentes.docente = :docente "
          + queryFilter
          + " "
          + "LIMIT :off, :size";
      /**
       * @param curso curso.short_name
       * @param docente user.username
      */
      listEntities = entityManager
          .createNativeQuery(fullQuery, EntityEscuelaMaterias.class)
          .setParameter("curso", curso)
          .setParameter("docente", docente)
          .setParameter("off", off)
          .setParameter("size", size)
          .getResultList();
    } else {
      fullQuery = "SELECT escuela_materias.* "
          + "FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias ON escuela_cursos_materias.materia = escuela_materias.short_name "
          + "AND escuela_cursos_materias.curso = :curso "
          + "WHERE escuela_materias.id NOT IN ("
          + "SELECT escuela_materias.id "
          + "FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias_docentes ON escuela_cursos_materias_docentes.materia = escuela_materias.short_name "
          + "AND escuela_cursos_materias_docentes.curso = :curso "
          + ") "
          + queryFilter
          + " "
          + "LIMIT :off, :size";
      /**
       * @param curso curso.short_name
      */
      listEntities = entityManager
          .createNativeQuery(fullQuery, EntityEscuelaMaterias.class)
          .setParameter("curso", curso)
          .setParameter("off", off)
          .setParameter("size", size)
          .getResultList();
    }

    List<DtoEscuelaMaterias> listDtos = listEntities
        .stream()
        .map(DtoEscuelaMaterias::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
