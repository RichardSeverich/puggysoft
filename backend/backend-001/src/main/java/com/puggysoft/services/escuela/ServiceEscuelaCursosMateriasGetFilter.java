package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaMaterias;
import com.puggysoft.dtos.escuela.DtoEscuelaMateriasFilter;
import com.puggysoft.entities.escuela.EntityEscuelaMaterias;
import com.puggysoft.tools.escuela.SqlEscuelaMateriasFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/**
 * Services for filter.
 */
@Service
public class ServiceEscuelaCursosMateriasGetFilter {

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
      String curso,
      boolean contains
  ) {
    String query = SqlEscuelaMateriasFilterBuilderNative.build(dtoFilter);
    String fullQuery;
    if (contains) {
      fullQuery = "SELECT escuela_cursos_materias.id, escuela_materias.* FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias ON "
          + "escuela_cursos_materias.materia=escuela_materias.short_name "
          + "WHERE escuela_cursos_materias.curso = '" + curso + "'";
    } else {
      fullQuery = "SELECT escuela_materias.* FROM escuela_materias WHERE "
          + "escuela_materias.short_name "
          + "NOT IN ( SELECT escuela_cursos_materias.materia FROM escuela_cursos_materias "
          + "WHERE escuela_cursos_materias.curso = '" + curso + "')";
    }
    if (!query.equals("")) {
      // Delete last 'AND' key word.
      query = query.substring(0, query.length() - 4);
      fullQuery = fullQuery + " AND " + query;
    }
    int off = page * size;
    fullQuery = fullQuery + " LIMIT " + off + "," + size;

    // JQPL (createQuery) and Native (createNativeQuery)
    Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityEscuelaMaterias.class);
    List<EntityEscuelaMaterias> listEntities;
    listEntities = (List<EntityEscuelaMaterias>) filterQuery.getResultList();
    List<DtoEscuelaMaterias> listDtos = listEntities
        .stream()
        .map(DtoEscuelaMaterias::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
