package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.repositories.sales.IRepositoryClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceClientCreate {

  @Autowired
  private IRepositoryClient repositoryClient;

  /** method for create. */
  public ResponseEntity<String> create(DtoClient dtoClient) {
    try {
      repositoryClient.save(dtoClient.dtoToEntity());
      return ResponseEntity.status(HttpStatus.CREATED).body("Created successfully");
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}