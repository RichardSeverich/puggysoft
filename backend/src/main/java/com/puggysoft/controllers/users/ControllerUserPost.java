package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.services.users.ServiceUserCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserPost {

  @Autowired
  private ServiceUserCreate serviceUserCreate;

  @PostMapping(path = "/api/v1/users")
  public ResponseEntity<String> post(@RequestBody @Valid DtoUser dtoUser) {
    return serviceUserCreate.create(dtoUser);
  }
}
