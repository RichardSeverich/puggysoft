package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.entities.qa.EntityQaTestCase;
import com.puggysoft.tools.SqlJoinBuilder;
import com.puggysoft.tools.SqlNotInBuilder;
import com.puggysoft.tools.qa.SqlQaTestCaseFilterBuilderNative;

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
public class ServiceQaTestCaseTagGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoQaTestCase>> filter(
      DtoQaTestCaseFilter dtoFilter,
      int page,
      int size,
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
    //
    String fullQuery;
    if (contains) {
      fullQuery = SqlJoinBuilder.getQuery(
          principalTableName,
          principalTablePrimaryKey,
          relationTableName,
          relationForeignKey,
          relationForeignKeyCriteria,
          criteria,
          queryFilter,
          page,
          size
      );
    } else {
      fullQuery = SqlNotInBuilder.getQuery(
          principalTableName,
          principalTablePrimaryKey,
          relationTableName,
          relationForeignKey,
          relationForeignKeyCriteria,
          criteria,
          queryFilter,
          page,
          size
      );
    }
    // JQPL (createQuery) and Native (createNativeQuery)
    Query query = entityManager.createNativeQuery(fullQuery, EntityQaTestCase.class);
    List<EntityQaTestCase> listEntities;
    listEntities = (List<EntityQaTestCase>) query.getResultList();
    List<DtoQaTestCase> listDtos = listEntities
        .stream()
        .map(DtoQaTestCase::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
