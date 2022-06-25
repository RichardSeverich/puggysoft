package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUserRole;
import com.puggysoft.entities.users.EntityUserRole;
import com.puggysoft.repositories.users.IRepositoryUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create a user-role. */
@Service
public class ServiceUserRoleCreate {

  @Autowired
  private IRepositoryUserRole rpositoryUserRole;

  /** method for create a user-role. */
  public ResponseEntity<String> create(DtoUserRole dtoUserRole) {
    try {
      EntityUserRole entity = rpositoryUserRole.save(dtoUserRole.dtoToEntity());
      DtoUserRole dto = DtoUserRole.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
