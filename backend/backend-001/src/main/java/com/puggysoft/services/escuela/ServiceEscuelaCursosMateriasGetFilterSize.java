package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaMateriasFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.escuela.SqlEscuelaMateriasFilterBuilderNative;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * Services for get size.
 */
@Service
public class ServiceEscuelaCursosMateriasGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoEscuelaMateriasFilter dtoFilter,
      Long pageSize,
      String curso,
      boolean contains
  ) {
    String query = SqlEscuelaMateriasFilterBuilderNative.build(dtoFilter);
    String fullQuery;
    if (contains) {
      fullQuery = "SELECT COUNT(*) FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias ON "
          + "escuela_cursos_materias.materia=escuela_materias.short_name "
          + "WHERE escuela_cursos_materias.curso = '" + curso + "'";
    } else {
      fullQuery = "SELECT COUNT(*) FROM escuela_materias WHERE "
          + "escuela_materias.short_name "
          + "NOT IN ( SELECT escuela_cursos_materias.materia FROM escuela_cursos_materias "
          + "WHERE escuela_cursos_materias.curso = '" + curso + "')";
    }
    if (!query.equals("")) {
      // Delete last 'AND' key word.
      query = query.substring(0, query.length() - 4);
      fullQuery = fullQuery + " AND " + query;
    }
    Long totalRows = 0L;
    Query filterQuery = entityManager.createNativeQuery(fullQuery);
    totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
