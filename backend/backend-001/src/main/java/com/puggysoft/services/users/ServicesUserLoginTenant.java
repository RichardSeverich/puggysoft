package com.puggysoft.services.users;

import com.puggysoft.entities.system.EntitySystemProperty;
import com.puggysoft.entities.users.EntityUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import com.puggysoft.repositories.system.IRepositorySystemProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * Services for login tenant.
 */
@Service
public class ServicesUserLoginTenant {

  @Autowired
  private IRepositoryUser repositoryUser;

  @Autowired
  private IRepositorySystemProperty repositorySystemProperty;

  /**
   * method for login tenant.
   */
  public ResponseEntity<Boolean> loginTenant(String username, String tenant) {
    List<EntitySystemProperty> entityPropertiesList = repositorySystemProperty
        .findSystemPropertyByNameAndTenant("SYS_LOGIN_EMAIL_VERIFIED_REQUIRED", tenant);
    boolean isEmailVerifiedRequired = entityPropertiesList.size() > 0
        && entityPropertiesList.get(0).getValue().equals("TRUE");
    if (isEmailVerifiedRequired) {
      List<EntityUser> userList = repositoryUser.findUserByUsernameAndEmailVerifiedAndActive(username);
      boolean isUserVerifiedEmail = userList.size() != 0;
      if (isUserVerifiedEmail) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
      }
      return ResponseEntity.status(HttpStatus.OK).body(false);
    }
    return ResponseEntity.status(HttpStatus.OK).body(true);
  }

}
