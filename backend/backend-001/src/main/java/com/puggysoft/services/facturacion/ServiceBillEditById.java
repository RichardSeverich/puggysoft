package com.puggysoft.services.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.repositories.facturacion.IRepositoryBill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceBillEditById {

  @Autowired
  private IRepositoryBill repositoryBill;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoBill dtoBill) {
    if (repositoryBill.existsById(id)) {
      try {
        dtoBill.setId(id.longValue());
        repositoryBill.save(dtoBill.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}