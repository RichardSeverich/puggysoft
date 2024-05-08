package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.SqlJoinCountBuilder;
import com.puggysoft.tools.SqlNotInCountBuilder;
import com.puggysoft.tools.escuela.SqlEscuelaCursosFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/**
 * Services for get size.
 */
@Service
public class ServiceEscuelaCursosDocentesGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoEscuelaCursosFilter dtoFilter,
      Long pageSize,
      String docente,
      boolean contains
  ) {
    String queryFilter = SqlEscuelaCursosFilterBuilderNative.build(dtoFilter);
    // Principal Table
    String principalTableName = "escuela_cursos";
    String principalTablePrimaryKey = "short_name";
    // Relationship table
    String relationTableName = "escuela_cursos_docentes";
    String relationForeignKey = "curso";
    String relationForeignKeyCriteria = "docente";
    String criteria = docente;
    String fullQuery;
    if (contains) {
      fullQuery = SqlJoinCountBuilder.getQuery(
          principalTableName,
          principalTablePrimaryKey,
          relationTableName,
          relationForeignKey,
          relationForeignKeyCriteria,
          criteria,
          queryFilter
      );
    } else {
      fullQuery = SqlNotInCountBuilder.getQuery(
          principalTableName,
          principalTablePrimaryKey,
          relationTableName,
          relationForeignKey,
          relationForeignKeyCriteria,
          criteria,
          queryFilter
      );
    }
    Long totalRows = 0L;
    Query query = entityManager.createNativeQuery(fullQuery);
    totalRows = Long.valueOf(query.getSingleResult().toString());
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
