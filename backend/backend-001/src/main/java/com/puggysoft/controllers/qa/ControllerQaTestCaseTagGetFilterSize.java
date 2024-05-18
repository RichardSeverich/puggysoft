package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.services.qa.ServiceQaTestCaseTagGetFilterSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
public class ControllerQaTestCaseTagGetFilterSize {

  @Autowired
  private ServiceQaTestCaseTagGetFilterSize service;

  @PostMapping(path = "/api/v1/qa-test-cases-tags/filter/size")
  public ResponseEntity<Long> getSize(
      @RequestParam Long pageSize,
      @RequestParam String tagName,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoQaTestCaseFilter dtoFilter
  ) {
    return service.getSize(dtoFilter, pageSize, tagName, contains);
  }
}
