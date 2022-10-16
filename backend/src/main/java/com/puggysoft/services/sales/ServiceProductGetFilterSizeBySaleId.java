package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.repositories.sales.IRepositoryProduct;
import com.puggysoft.tools.TotalPagesCalculator;
import com.puggysoft.tools.sales.SqlProductFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceProductGetFilterSizeBySaleId {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(Long saleId, DtoProductFilter dtoProductFilter, Long pageSize) {

    String query = SqlProductFilterBuilderNative.build(dtoProductFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryProduct.findSizeProductsBelongToSale(saleId);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM products "
          + "INNER JOIN sales_products ON products.id=sales_products.id_product "
          + "INNER JOIN sales ON sales.id=sales_products.id_sale "
          + "WHERE sales.id = " + saleId + " AND " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}