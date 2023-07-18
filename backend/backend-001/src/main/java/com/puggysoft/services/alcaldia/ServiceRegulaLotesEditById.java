package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.repositories.alcaldia.IRepositoryRegulaLotes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceRegulaLotesEditById {

  @Autowired
  private IRepositoryRegulaLotes repositoryRegulaLotes;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoRegulaLotes dtoRegulaLotes) {
    if (repositoryRegulaLotes.existsById(id)) {
      try {
        dtoRegulaLotes.setId(id.longValue());
        repositoryRegulaLotes.save(dtoRegulaLotes.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}