package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUserAuth;
import com.puggysoft.services.users.ServicesUserLogin;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserLogin {

  @Autowired
  private ServicesUserLogin serviceUserLogin;

  @PostMapping(path = "/api/v1/login")
  public ResponseEntity<DtoUserAuth> post(@RequestBody @Valid DtoUserAuth dtoUserAuth) {
    return serviceUserLogin.login(dtoUserAuth);
  }
}
