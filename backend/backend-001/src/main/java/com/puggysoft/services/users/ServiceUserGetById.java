package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.entities.users.EntityUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get a user by id. */
@Service
public class ServiceUserGetById {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for retrive a user. */
  public ResponseEntity<DtoUser> getById(Long id) {
    Optional<EntityUser> optionalEntity = repositoryUser.findById(id);
    if (optionalEntity.isPresent()) {
      DtoUser dtoUser = DtoUser.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoUser);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}