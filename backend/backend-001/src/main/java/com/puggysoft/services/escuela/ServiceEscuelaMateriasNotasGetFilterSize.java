package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaNotasFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.SqlJoinCountBuilder;
import com.puggysoft.tools.SqlNotInCountBuilder;
import com.puggysoft.tools.escuela.SqlEscuelaNotasFilterBuilderNative;
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
public class ServiceEscuelaMateriasNotasGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoEscuelaNotasFilter dtoFilter,
      Long pageSize,
      String materia,
      boolean contains
  ) {
    String queryFilter = SqlEscuelaNotasFilterBuilderNative.build(dtoFilter);
    // Principal Table
    String principalTableName = "escuela_notas";
    String principalTablePrimaryKey = "short_name";
    // Relationship table
    String relationTableName = "escuela_notas_materias";
    String relationForeignKey = "nota";
    String relationForeignKeyCriteria = "materia";
    String criteria = materia;
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
