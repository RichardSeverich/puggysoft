package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.entities.sales.EntitySaleProduct;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get by id. */
@Service
public class ServiceSaleProductGetById {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<DtoSaleProduct> getById(Long id) {
    Optional<EntitySaleProduct> optionalEntity = repositorySaleProduct.findById(id);
    if (optionalEntity.isPresent()) {
      DtoSaleProduct dtoSaleProduct = DtoSaleProduct.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoSaleProduct);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}