package com.puggysoft.services.users;

import com.puggysoft.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for delete a user by id. */
@Service
public class ServiceUserDeleteById {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for delete a user. */
  public ResponseEntity<String> deleteById(Long id) {
    try {
      if (repositoryUser.existsById(id)) {
        repositoryUser.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
      }
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}