package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoSystemProperty;
import com.puggysoft.entities.system.EntitySystemProperty;
import com.puggysoft.repositories.system.IRepositorySystemProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceSystemPropertyCreate {

  @Autowired
  private IRepositorySystemProperty repositorySystemProperty;

  /** method for create. */
  public ResponseEntity<String> create(DtoSystemProperty dtoSystemProperty) {
    try {
      EntitySystemProperty entity = repositorySystemProperty.save(dtoSystemProperty.dtoToEntity());
      DtoSystemProperty dto = DtoSystemProperty.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}