package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoTenantUser;
import com.puggysoft.services.system.ServiceTenantUserCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerTenantUserPost {

  @Autowired
  private ServiceTenantUserCreate serviceTenantUserCreate;

  @PostMapping(path = "/api/v1/tenants-users")
  public ResponseEntity<String> post(@RequestBody @Valid DtoTenantUser dtoTenantUser) {
    return serviceTenantUserCreate.create(dtoTenantUser);
  }
}
