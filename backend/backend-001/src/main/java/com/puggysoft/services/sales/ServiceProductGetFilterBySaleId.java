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
public class ServiceProductGetFilterBySaleId {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoProduct>> filter(Long saleId, DtoProductFilter dtoProductFilter, int page, int size) {

    String query = SqlProductFilterBuilderNative.build(dtoProductFilter);
    int off = page * size;
    List<EntityProduct> listEntities;
    if (query.equals("")) {
      listEntities = repositoryProduct.findProductsBelongToSaleByPagination(off, size, saleId);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT "
          + "sales_products.id, "
          + "sales_products.quantity as stock, "
          + "products.code, "
          + "products.name, "
          + "products.purchase_price, "
          + "products.sale_price, "
          + "products.minimum_stock, "
          + "products.image, "
          + "products.description, "
          + "products.image, "
          + "products.bar_code, "
          + "products.location, "
          + "products.tenant, "
          + "products.created_by, "
          + "products.creation_date, "
          + "products.updated_by, "
          + "products.update_date "
          + "FROM products "
          + "INNER JOIN sales_products ON products.id=sales_products.id_product "
          + "INNER JOIN sales ON sales.id=sales_products.id_sale "
          + "WHERE sales.id = " + saleId + " AND " + query + " LIMIT " + off + "," + size;
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
