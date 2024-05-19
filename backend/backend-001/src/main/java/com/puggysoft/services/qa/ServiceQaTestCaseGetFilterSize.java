package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.repositories.qa.IRepositoryQaTestCase;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.qa.SqlQaTestCaseFilterBuilderNative;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/** Services for get size. */
@Service
public class ServiceQaTestCaseGetFilterSize {

  @Autowired
  private IRepositoryQaTestCase repositoryQaTestCase;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoQaTestCaseFilter dtoFilter, Long pageSize) {

    String query = SqlQaTestCaseFilterBuilderNative.build(dtoFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryQaTestCase.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM qa_test_cases WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }
}
