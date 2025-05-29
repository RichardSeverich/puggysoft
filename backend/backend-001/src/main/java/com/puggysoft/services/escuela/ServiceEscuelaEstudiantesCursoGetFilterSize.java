package com.puggysoft.services.escuela;

import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.users.SqlUserFilterBuilderNative;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/**
 * Services for get size.
 */
@Service
public class ServiceEscuelaEstudiantesCursoGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoUserFilter dtoFilter,
      Long pageSize,
      String curso
  ) {
    String queryFilter = SqlUserFilterBuilderNative.build(dtoFilter);
    Long totalRows = 0L;
    if (queryFilter != null && !queryFilter.trim().isEmpty()) {
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      queryFilter = "AND " + queryFilter;
    }

    String fullQuery = "SELECT COUNT(DISTINCT users.id) "
        + "FROM users "
        + "INNER JOIN escuela_cursos_estudiantes ON escuela_cursos_estudiantes.estudiante = users.username "
        + "WHERE escuela_cursos_estudiantes.curso = :curso "
        + queryFilter;
    /**
     * @param curso cursos.shortName
    */
    totalRows = ((Number) entityManager.createNativeQuery(fullQuery)
        .setParameter("curso", curso)
        .getSingleResult()).longValue();

    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
