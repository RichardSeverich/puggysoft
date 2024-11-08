package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.entities.sales.EntityProduct;
import com.puggysoft.tools.SqlJoinBuilder;
import com.puggysoft.tools.SqlNotInBuilder;
import com.puggysoft.tools.sales.SqlProductFilterBuilderNative;
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
public class ServiceProductsByProductGroupsGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoProduct>> filter(
      DtoProductFilter dtoFilter,
      int page,
      int size,
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
    Query query = entityManager.createNativeQuery(fullQuery, EntityProduct.class);
    List<EntityProduct> listEntities;
    listEntities = (List<EntityProduct>) query.getResultList();
    List<DtoProduct> listDtos = listEntities
        .stream()
        .map(DtoProduct::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
