package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.entities.sales.EntitySaleProduct;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
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

  /** method for create. */
  public ResponseEntity<String> create(DtoSaleProduct dtoSaleProduct) {
    try {
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