package com.puggysoft.services.facturacion;

import com.puggysoft.dtos.facturacion.DtoBillFilter;
import com.puggysoft.repositories.facturacion.IRepositoryBill;
import com.puggysoft.tools.TotalPagesCalculator;
import com.puggysoft.tools.facturacion.SqlBillFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceBillGetFilterSize {

  @Autowired
  private IRepositoryBill repositoryBill;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoBillFilter dtoBillFilter, Long pageSize) {

    String query = SqlBillFilterBuilderNative.build(dtoBillFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryBill.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM fac_factura WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}