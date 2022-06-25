package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUserRole;
import com.puggysoft.repositories.users.IRepositoryUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit a user-role by id. */
@Service
public class ServiceUserRoleEditById {

  @Autowired
  private IRepositoryUserRole repositoryUserRole;

  /** method for edit a user-role. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoUserRole dtoUserRole) {
    if (repositoryUserRole.existsById(id)) {
      try {
        dtoUserRole.setId(id.longValue());
        repositoryUserRole.save(dtoUserRole.dtoToEntity());

        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}