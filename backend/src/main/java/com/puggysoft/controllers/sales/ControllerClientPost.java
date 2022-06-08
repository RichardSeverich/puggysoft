package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.services.sales.ServiceClientCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerClientPost {

  @Autowired
  private ServiceClientCreate serviceClientCreate;

  @PostMapping(path = "/api/v1/clients")
  public ResponseEntity<String> post(@RequestBody @Valid DtoClient dtoClient) {
    return serviceClientCreate.create(dtoClient);
  }
}
