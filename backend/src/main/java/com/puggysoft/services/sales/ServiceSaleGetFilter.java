package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.dtos.sales.DtoSaleFilter;
import com.puggysoft.entities.sales.EntitySale;
import com.puggysoft.repositories.sales.IRepositorySale;
import com.puggysoft.tools.sales.SqlSaleFilterBuilderNative;
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
public class ServiceSaleGetFilter {

  @Autowired
  private IRepositorySale repositorySale;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoSale>> filter(DtoSaleFilter dtoSaleFilter, int page, int size) {

    String query = SqlSaleFilterBuilderNative.build(dtoSaleFilter);
    int off = page * size;
    List<EntitySale> listEntities;
    if (query.equals("")) {
      listEntities = repositorySale.findSalesByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT sales.* FROM sales WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntitySale.class);
      listEntities = (List<EntitySale>) filterQuery.getResultList();;
    }
    List<DtoSale> listDtoSale = listEntities
        .stream()
        .map(DtoSale::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoSale);
  }

}
