package com.puggysoft.services.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.entities.facturacion.EntityBill;
import com.puggysoft.repositories.facturacion.IRepositoryBill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceBillCreate {

  @Autowired
  private IRepositoryBill repositoryBill;

  /** method for create. */
  public ResponseEntity<String> create(DtoBill dtoBill) {
    try {
      EntityBill entity = repositoryBill.save(dtoBill.dtoToEntity());
      DtoBill dto = DtoBill.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}