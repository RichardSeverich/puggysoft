package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleFilter;
import com.puggysoft.repositories.sales.IRepositorySale;
import com.puggysoft.tools.TotalPagesCalculator;
import com.puggysoft.tools.sales.SqlSaleFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceSaleGetFilterSize {

  @Autowired
  private IRepositorySale repositorySale;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoSaleFilter dtoSaleFilter, Long pageSize) {

    String query = SqlSaleFilterBuilderNative.build(dtoSaleFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositorySale.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM sales " + query;
      Query filterQuery = entityManager.createQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}