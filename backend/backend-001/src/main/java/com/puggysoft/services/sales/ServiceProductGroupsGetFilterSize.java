package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProductGroupsFilter;
import com.puggysoft.repositories.sales.IRepositoryProductGroups;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.sales.SqlProductGroupsFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceProductGroupsGetFilterSize {

  @Autowired
  private IRepositoryProductGroups repositoryGroupProduct;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoProductGroupsFilter dtoGroupProductsFilter, Long pageSize) {

    String query = SqlProductGroupsFilterBuilderNative.build(dtoGroupProductsFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryGroupProduct.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM product_groups WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}