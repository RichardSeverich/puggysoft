package com.puggysoft.controllers.users;

import com.puggysoft.services.users.ServicesUserLoginTenant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserLoginTenant {

  @Autowired
  private ServicesUserLoginTenant serviceUserLoginTenant;

  @GetMapping(path = "/api/v1/login-tenant")
  public ResponseEntity<Boolean> get(
      @RequestParam String username,
      @RequestParam String tenant
  ) {
    return serviceUserLoginTenant.loginTenant(username, tenant);
  }
}
