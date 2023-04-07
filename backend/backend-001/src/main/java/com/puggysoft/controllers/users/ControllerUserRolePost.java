package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUserRole;
import com.puggysoft.services.users.ServiceUserRoleCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserRolePost {

  @Autowired
  private ServiceUserRoleCreate serviceUserRoleCreate;

  @PostMapping(path = "/api/v1/users-roles")
  public ResponseEntity<String> post(@RequestBody @Valid DtoUserRole dtoUserRole) {
    return serviceUserRoleCreate.create(dtoUserRole);
  }
}
