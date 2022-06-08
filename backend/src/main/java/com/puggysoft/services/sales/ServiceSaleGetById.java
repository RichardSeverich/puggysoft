package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.entities.sales.EntitySale;
import com.puggysoft.repositories.sales.IRepositorySale;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get by id. */
@Service
public class ServiceSaleGetById {

  @Autowired
  private IRepositorySale repositorySale;

  /** method for retrive. */
  public ResponseEntity<DtoSale> getById(Long id) {
    Optional<EntitySale> optionalEntity = repositorySale.findById(id);
    if (optionalEntity.isPresent()) {
      DtoSale dtoSale = DtoSale.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoSale);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}