package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.escuela.SqlEscuelaCursosFilterBuilderNative;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/**
 * Services for get size.
 */
@Service
public class ServiceEscuelaCursosDocenteGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoEscuelaCursosFilter dtoFilter,
      Long pageSize,
      String docente
  ) {
    String queryFilter = SqlEscuelaCursosFilterBuilderNative.build(dtoFilter);
    Long totalRows = 0L;
    if (queryFilter != null && !queryFilter.trim().isEmpty()) {
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      queryFilter = "AND " + queryFilter;
    }

    String fullQuery = "SELECT COUNT(DISTINCT escuela_cursos.id) "
        + "FROM escuela_cursos "
        + "INNER JOIN escuela_cursos_materias_docentes ON escuela_cursos_materias_docentes.curso = escuela_cursos.short_name "
        + "WHERE escuela_cursos_materias_docentes.docente = :docente "
        + queryFilter;
    /**
     * @param docente user.username
    */
    totalRows = ((Number) entityManager.createNativeQuery(fullQuery)
        .setParameter("docente", docente)
        .getSingleResult()).longValue();

    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
