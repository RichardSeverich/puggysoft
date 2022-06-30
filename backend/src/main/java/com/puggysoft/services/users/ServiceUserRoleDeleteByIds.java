package com.puggysoft.services.users;

import com.puggysoft.repositories.users.IRepositoryUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for delete a user-role by id. */
@Service
public class ServiceUserRoleDeleteByIds {

  @Autowired
  private IRepositoryUserRole repositoryUserRole;

  /** method for delete a user-role. */
  public ResponseEntity<String> deleteByIds(Long idUser, Long idRole) {
    try {
      if (repositoryUserRole.findByIds(idUser, idRole).size() > 0) {
        repositoryUserRole.deleteUserRoleByIds(idUser, idRole);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
      }
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}