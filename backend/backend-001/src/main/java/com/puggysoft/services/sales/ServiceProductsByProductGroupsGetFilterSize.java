package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.SqlJoinCountBuilder;
import com.puggysoft.tools.SqlNotInCountBuilder;
import com.puggysoft.tools.sales.SqlProductFilterBuilderNative;
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
public class ServiceProductsByProductGroupsGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoProductFilter dtoFilter,
      Long pageSize,
      String productGroup,
      boolean contains
  ) {
    String queryFilter = SqlProductFilterBuilderNative.build(dtoFilter);
    // Principal Table
    String principalTableName = "products";
    String principalTablePrimaryKey = "id";
    // Relationship table
    String relationTableName = "product_groups_products";
    String relationForeignKey = "id_product";
    String relationForeignKeyCriteria = "id_product_group";
    String criteria = productGroup;
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
