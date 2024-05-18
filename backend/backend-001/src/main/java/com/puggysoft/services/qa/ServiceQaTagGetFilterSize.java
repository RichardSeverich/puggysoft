package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTagFilter;
import com.puggysoft.repositories.qa.IRepositoryQaTag;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.qa.SqlQaTagFilterBuilderNative;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/** Services for get size. */
@Service
public class ServiceQaTagGetFilterSize {

  @Autowired
  private IRepositoryQaTag repositoryQaTag;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoQaTagFilter dtoFilter, Long pageSize) {

    String query = SqlQaTagFilterBuilderNative.build(dtoFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryQaTag.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM qa_tags WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }
}
