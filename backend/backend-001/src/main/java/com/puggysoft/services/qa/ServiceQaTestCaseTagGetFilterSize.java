package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.SqlJoinCountBuilder;
import com.puggysoft.tools.SqlNotInCountBuilder;
import com.puggysoft.tools.qa.SqlQaTestCaseFilterBuilderNative;

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
public class ServiceQaTestCaseTagGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoQaTestCaseFilter dtoFilter,
      Long pageSize,
      String tagName,
      boolean contains
  ) {
    String queryFilter = SqlQaTestCaseFilterBuilderNative.build(dtoFilter);
    // Principal Table
    String principalTableName = "qa_test_cases";
    String principalTablePrimaryKey = "id";
    // Relationship table
    String relationTableName = "qa_test_cases_tags";
    String relationForeignKey = "id_test_case";
    String relationForeignKeyCriteria = "tag_name";
    String criteria = tagName;
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
