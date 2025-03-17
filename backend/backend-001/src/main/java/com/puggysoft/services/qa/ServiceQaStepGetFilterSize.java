package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaStepFilter;
import com.puggysoft.repositories.qa.IRepositoryQaStep;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.qa.SqlQaStepFilterBuilderNative;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceQaStepGetFilterSize {

  @Autowired
  private IRepositoryQaStep repositoryQaStep;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoQaStepFilter dtoFilter, Long pageSize) {

    String query = SqlQaStepFilterBuilderNative.build(dtoFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryQaStep.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM qa_steps WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }
}
