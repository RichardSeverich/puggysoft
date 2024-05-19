package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.services.qa.ServiceQaTestCaseTagGetFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ControllerQaTestCaseTagGetFilter {

  @Autowired
  private ServiceQaTestCaseTagGetFilter service;

  @PostMapping(path = "/api/v1/qa-test-cases-tags/filter")
  public ResponseEntity<List<DtoQaTestCase>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String tagName,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoQaTestCaseFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, tagName, contains);
  }
}
