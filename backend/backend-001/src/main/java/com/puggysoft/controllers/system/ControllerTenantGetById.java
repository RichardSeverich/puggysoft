package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoTenant;
import com.puggysoft.services.system.ServiceTenantsGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerTenantGetById {

  @Autowired
  private ServiceTenantsGetById serviceTenantsGetById;

  @GetMapping(path = "/api/v1/tenants/{id}")
  public ResponseEntity<DtoTenant> getById(@PathVariable Long id) {
    return serviceTenantsGetById.getById(id);
  }
}