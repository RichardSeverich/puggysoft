package com.puggysoft.controllers.reservations;

import com.puggysoft.dtos.reservations.DtoResResource;
import com.puggysoft.services.reservations.ServiceResourceCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerResourcePost {

  @Autowired
  private ServiceResourceCreate serviceResourceCreate;

  @PostMapping(path = "/api/v1/reservations-resources")
  public ResponseEntity<String> post(@RequestBody @Valid DtoResResource dtoResResource) {
    return serviceResourceCreate.create(dtoResResource);
  }
}
