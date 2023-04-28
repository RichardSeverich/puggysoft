package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoTenant;
import com.puggysoft.services.system.ServiceTenantCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerTenantPost {

  @Autowired
  private ServiceTenantCreate serviceTenantCreate;

  @PostMapping(path = "/api/v1/tenants")
  public ResponseEntity<String> post(@RequestBody @Valid DtoTenant dtoTenant) {
    return serviceTenantCreate.create(dtoTenant);
  }
}
