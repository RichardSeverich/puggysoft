package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoSystemProperty;
import com.puggysoft.repositories.system.IRepositorySystemProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceSystemPropertyEditById {

  @Autowired
  private IRepositorySystemProperty repositorySystemProperty;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoSystemProperty dtoSystemProperty) {
    if (repositorySystemProperty.existsById(id)) {
      try {
        dtoSystemProperty.setId(id.longValue());
        repositorySystemProperty.save(dtoSystemProperty.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}