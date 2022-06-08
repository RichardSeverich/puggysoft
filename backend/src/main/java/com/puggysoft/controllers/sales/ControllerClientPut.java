package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.services.sales.ServiceClientEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerClientPut {

  @Autowired
  private ServiceClientEditById serviceClientEditById;

  @PutMapping(path = "/api/v1/clients/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoClient dtoClient) {
    return serviceClientEditById.editById(id, dtoClient);
  }
}