package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit a user by id. */
@Service
public class ServiceUserEditById {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for edit a user. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoUser dtoUser) {
    if (repositoryUser.existsById(id)) {
      try {
        dtoUser.setId(id.longValue());
        repositoryUser.save(dtoUser.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}