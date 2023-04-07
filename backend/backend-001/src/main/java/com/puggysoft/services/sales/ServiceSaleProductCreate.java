package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
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

/** Services for create. */
@Service
public class ServiceSaleProductCreate {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for create. */
  public ResponseEntity<String> create(DtoSaleProduct dtoSaleProduct) {

    // GET PRODUCT
    Optional<EntityProduct> optionalEntity = repositoryProduct.findById(dtoSaleProduct.getIdProduct());
    if (!optionalEntity.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
    EntityProduct entityProduct = optionalEntity.get();
    Integer stock = entityProduct.getStock();
    Integer quantity = dtoSaleProduct.getQuantity();
    if (quantity > stock) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body("Quantity should be equals or less than stock");
    }
    Integer newStock = stock - quantity;
    entityProduct.setStock(newStock);
    // SAVE NEW STOCK AND CREATE RELATION
    try {
      repositoryProduct.save(entityProduct);
      EntitySaleProduct entity = repositorySaleProduct.save(dtoSaleProduct.dtoToEntity());
      DtoSaleProduct dto = DtoSaleProduct.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}