package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.services.qa.ServiceQaTestCaseCreate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerQaTestCasePost {
  @Autowired
  private ServiceQaTestCaseCreate service;

  @PostMapping(path = "/api/v1/qa-test-cases")
  public ResponseEntity<String> post(@RequestBody @Valid DtoQaTestCase dtoQaTestCase) {
    return service.create(dtoQaTestCase);
  }
}