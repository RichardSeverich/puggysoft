package com.puggysoft.services.sales;

import com.puggysoft.entities.sales.EntityProduct;
import com.puggysoft.entities.sales.EntitySaleProduct;
import com.puggysoft.repositories.sales.IRepositoryProduct;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for delete by id. */
@Service
public class ServiceSaleProductDeleteById {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for delete. */
  public ResponseEntity<String> deleteById(Long id) {

    // GET SALE-PRODUCT RELATION
    Optional<EntitySaleProduct> optionalEntitySaleProduct = repositorySaleProduct.findById(id);
    if (!optionalEntitySaleProduct.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("sale product relation not found");
    }
    EntitySaleProduct entitySaleProduct = optionalEntitySaleProduct.get();
    Long productId = entitySaleProduct.getIdProduct();

    // GET PRODUCT
    Optional<EntityProduct> optionalEntityProduct = repositoryProduct.findById(productId);
    if (!optionalEntityProduct.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not found");
    }
    EntityProduct entityProduct = optionalEntityProduct.get();

    // CALCULATION NEW STOCK
    Integer stock = entityProduct.getStock();
    Integer quantity = entitySaleProduct.getQuantity();
    Integer newStock = stock + quantity;
    entityProduct.setStock(newStock);

    // SAVE NEW STOCK AND CREATE RELATION
    try {
      // if (repositorySaleProduct.existsById(id))
      repositoryProduct.save(entityProduct);
      repositorySaleProduct.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}