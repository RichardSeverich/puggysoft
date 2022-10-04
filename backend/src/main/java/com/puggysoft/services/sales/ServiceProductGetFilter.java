package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.entities.sales.EntityProduct;
import com.puggysoft.repositories.sales.IRepositoryProduct;
import com.puggysoft.tools.sales.SqlProductFilterBuilderNative;
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
public class ServiceProductGetFilter {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoProduct>> filter(DtoProductFilter dtoProductFilter, int page, int size) {

    String query = SqlProductFilterBuilderNative.build(dtoProductFilter);
    int off = page * size;
    List<EntityProduct> listEntities;
    if (query.equals("")) {
      listEntities = repositoryProduct.findProductsByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT products.* FROM products WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityProduct.class);
      listEntities = (List<EntityProduct>) filterQuery.getResultList();;
    }
    List<DtoProduct> listDtoProduct = listEntities
        .stream()
        .map(DtoProduct::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoProduct);
  }

}
