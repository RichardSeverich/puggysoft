package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTestCaseTag;
import com.puggysoft.services.qa.ServiceQaTestCaseTagCreate;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerQaTestCaseTagPost {
  @Autowired
  private ServiceQaTestCaseTagCreate service;

  @PostMapping(path = "/api/v1/qa-test-cases-tags")
  public ResponseEntity<String> post(@RequestBody @Valid DtoQaTestCaseTag dto) {
    return service.create(dto);
  }
}