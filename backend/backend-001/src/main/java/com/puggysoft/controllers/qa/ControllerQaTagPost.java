package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTag;
import com.puggysoft.services.qa.ServiceQaTagCreate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerQaTagPost {
  @Autowired
  private ServiceQaTagCreate service;

  @PostMapping(path = "/api/v1/qa-tags")
  public ResponseEntity<String> post(@RequestBody @Valid DtoQaTag dtoQaTag) {
    return service.create(dtoQaTag);
  }
}