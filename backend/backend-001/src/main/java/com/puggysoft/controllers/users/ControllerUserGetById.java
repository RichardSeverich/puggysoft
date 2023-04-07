package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.services.users.ServiceUserGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserGetById {

  @Autowired
  private ServiceUserGetById serviceUserGetById;

  @GetMapping(path = "/api/v1/users/{id}")
  public ResponseEntity<DtoUser> getById(@PathVariable Long id) {
    return serviceUserGetById.getById(id);
  }
}