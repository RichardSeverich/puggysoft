package com.puggysoft.services.sales;

import com.puggysoft.repositories.sales.IRepositoryClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for delete by id. */
@Service
public class ServiceClientDeleteById {

  @Autowired
  private IRepositoryClient repositoryClient;

  /** method for delete. */
  public ResponseEntity<String> deleteById(Long id) {
    if (repositoryClient.existsById(id)) {
      repositoryClient.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}