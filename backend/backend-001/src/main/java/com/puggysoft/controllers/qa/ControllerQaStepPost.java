package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaStep;
import com.puggysoft.services.qa.ServiceQaStepCreate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerQaStepPost {
  @Autowired
  private ServiceQaStepCreate service;

  @PostMapping(path = "/api/v1/qa-steps")
  public ResponseEntity<String> post(@RequestBody @Valid DtoQaStep dtoQaStep) {
    return service.create(dtoQaStep);
  }
}