package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoSystemProperty;
import com.puggysoft.entities.system.EntitySystemProperty;
import com.puggysoft.repositories.system.IRepositorySystemProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all. */
@Service
public class ServiceSystemPropertyGetByName {

  @Autowired
  private IRepositorySystemProperty repositorySystemProperty;

  /** method for retrive. */
  public ResponseEntity<DtoSystemProperty> getByName(String name) {
    try {
      EntitySystemProperty entitySystemProperty = repositorySystemProperty.findSystemPropertyByName(name);
      DtoSystemProperty dtoSystemProperty = DtoSystemProperty.entityToDto(entitySystemProperty);
      return ResponseEntity.status(HttpStatus.OK).body(dtoSystemProperty);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      ex.printStackTrace();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
    }
  }
}