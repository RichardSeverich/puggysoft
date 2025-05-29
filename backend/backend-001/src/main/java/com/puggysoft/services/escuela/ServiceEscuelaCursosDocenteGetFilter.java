package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursos;
import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.entities.escuela.EntityEscuelaCursos;
import com.puggysoft.tools.escuela.SqlEscuelaCursosFilterBuilderNative;

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
public class ServiceEscuelaCursosDocenteGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoEscuelaCursos>> filter(
      DtoEscuelaCursosFilter dtoFilter,
      int page,
      int size,
      String docente
  ) {
    String queryFilter = SqlEscuelaCursosFilterBuilderNative.build(dtoFilter);
    int off = page * size;
    if (queryFilter != null && !queryFilter.trim().isEmpty()) {
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      queryFilter = "AND " + queryFilter;
    }

    String fullQuery = "SELECT DISTINCT "
        + "escuela_cursos.* "
        + "FROM escuela_cursos "
        + "INNER JOIN escuela_cursos_materias_docentes ON escuela_cursos_materias_docentes.curso = escuela_cursos.short_name "
        + "WHERE escuela_cursos_materias_docentes.docente = :docente "
        + queryFilter
        + " "
        + "LIMIT :off, :size";
    /**
     * @param docente user.username
    */
    List<EntityEscuelaCursos> listEntities = entityManager
        .createNativeQuery(fullQuery, EntityEscuelaCursos.class)
        .setParameter("docente", docente)
        .setParameter("off", off)
        .setParameter("size", size)
        .getResultList();

    List<DtoEscuelaCursos> listDtos = listEntities
        .stream()
        .map(DtoEscuelaCursos::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
