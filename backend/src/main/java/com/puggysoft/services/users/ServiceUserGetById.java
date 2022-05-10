package com.yeshua.services.users;

import com.yeshua.dtos.users.DtoUser;
import com.yeshua.entities.users.EntityUser;
import com.yeshua.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ServiceUserGetById {

  @Autowired
  private IRepositoryUser _iRepositoryUser;

  public ResponseEntity<DtoUser> getById(Integer id) {
    Optional<EntityUser> optionalEntity = _iRepositoryUser.findById(id.longValue());
    if (optionalEntity.isPresent()) {
      DtoUser dtoUser = DtoUser.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoUser);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}