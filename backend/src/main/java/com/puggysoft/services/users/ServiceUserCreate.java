package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServiceUserCreate {

  @Autowired
  private IRepositoryUser repository;

  public ResponseEntity<String> post(DtoUser dtoUser) {
    try {
      repository.save(dtoUser.dtoToEntity());
      return ResponseEntity.status(HttpStatus.CREATED).body("Created successfully");
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}