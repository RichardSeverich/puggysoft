package com.puggysoft.services.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.entities.facturacion.EntityBill;
import com.puggysoft.repositories.facturacion.IRepositoryBill;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get by id. */
@Service
public class ServiceBillGetById {

  @Autowired
  private IRepositoryBill repositoryBill;

  /** method for retrive. */
  public ResponseEntity<DtoBill> getById(Long id) {
    Optional<EntityBill> optionalEntity = repositoryBill.findById(id);
    if (optionalEntity.isPresent()) {
      DtoBill dtoProduct = DtoBill.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoProduct);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}