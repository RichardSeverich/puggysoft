package com.puggysoft.controllers.users;

import com.puggysoft.services.users.ServiceUserDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserDeleteById {

  @Autowired
  private ServiceUserDeleteById serviceUserDeleteById;

  @DeleteMapping(path = "/api/v1/users/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceUserDeleteById.deleteById(id);
  }
}
