package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.entities.sales.EntitySale;
import com.puggysoft.repositories.sales.IRepositorySale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceSaleCreate {

  @Autowired
  private IRepositorySale repositorySale;

  /** method for create. */
  public ResponseEntity<String> create(DtoSale dtoSale) {
    try {
      EntitySale entity = repositorySale.save(dtoSale.dtoToEntity());
      DtoSale dto = DtoSale.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}