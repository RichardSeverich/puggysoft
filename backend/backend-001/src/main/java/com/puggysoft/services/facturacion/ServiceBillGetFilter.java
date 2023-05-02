package com.puggysoft.services.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.dtos.facturacion.DtoBillFilter;
import com.puggysoft.entities.facturacion.EntityBill;
import com.puggysoft.repositories.facturacion.IRepositoryBill;
import com.puggysoft.tools.facturacion.SqlBillFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter. */
@Service
public class ServiceBillGetFilter {

  @Autowired
  private IRepositoryBill repositoryBill;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoBill>> filter(DtoBillFilter dtoBillFilter, int page, int size) {

    String query = SqlBillFilterBuilderNative.build(dtoBillFilter);
    int off = page * size;
    List<EntityBill> listEntities;
    if (query.equals("")) {
      listEntities = repositoryBill.findBillByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT fac_factura.* FROM fac_factura WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityBill.class);
      listEntities = (List<EntityBill>) filterQuery.getResultList();

    }
    List<DtoBill> listDtoBill = listEntities
        .stream()
        .map(DtoBill::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoBill);
  }

}
