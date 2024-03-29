package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUserAuth;
import com.puggysoft.entities.users.EntityUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import com.puggysoft.security.JWTToken;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for login. */
@Service
public class ServicesUserLogin {

  @Autowired
  private IRepositoryUser repositoryUser;


  /** method for login. */
  public ResponseEntity<DtoUserAuth> login(DtoUserAuth dtoUserAuth) {
    List<EntityUser> userList = repositoryUser
        .findUserByUsernameAndPassword(dtoUserAuth.getUsername(), dtoUserAuth.getPassword());
    boolean isEmpty = userList.size() == 0;
    // Negative scenario user does not exists.
    if (isEmpty) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
    // Verify is user is active
    List<EntityUser> userListActive = repositoryUser
        .findUserByUsernameAndPasswordActive(dtoUserAuth.getUsername(), dtoUserAuth.getPassword());
    boolean isEmptyActive = userListActive.size() == 0;
    // Negative scenario user is not active.
    if (isEmptyActive) {
      return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(null);
    }
    // Positive scenario
    String token = JWTToken.getJWTToken(dtoUserAuth.getUsername());
    dtoUserAuth.setToken(token);
    return ResponseEntity.status(HttpStatus.OK).body(dtoUserAuth);
  }

}