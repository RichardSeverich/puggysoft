package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.entities.users.EntityRole;
import com.puggysoft.repositories.users.IRepositoryRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all. */
@Service
public class ServiceRoleGetByName {

  @Autowired
  private IRepositoryRole repositoryRole;

  /** method for retrive. */
  public ResponseEntity<DtoRole> getByName(String name) {
    try {
      EntityRole entityRole = repositoryRole.findRoleByName(name);
      DtoRole dtoRole = DtoRole.entityToDto(entityRole);
      return ResponseEntity.status(HttpStatus.OK).body(dtoRole);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      ex.printStackTrace();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
    }
  }
}