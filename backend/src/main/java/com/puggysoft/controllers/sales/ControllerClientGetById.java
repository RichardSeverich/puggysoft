package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.services.sales.ServiceClientGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerClientGetById {

  @Autowired
  private ServiceClientGetById serviceClientGetById;

  @GetMapping(path = "/api/v1/clients/{id}")
  public ResponseEntity<DtoClient> getById(@PathVariable Long id) {
    return serviceClientGetById.getById(id);
  }
}