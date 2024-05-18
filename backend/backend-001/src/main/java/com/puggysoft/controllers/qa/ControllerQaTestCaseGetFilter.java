package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.services.qa.ServiceQaTestCaseGetFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ControllerQaTestCaseGetFilter {

  @Autowired
  private ServiceQaTestCaseGetFilter service;

  @PostMapping(path = "/api/v1/qa-test-cases/filter")
  public ResponseEntity<List<DtoQaTestCase>> getQaTestCaseFilter(
          @RequestParam int page,
          @RequestParam int size,
          @RequestBody @Valid DtoQaTestCaseFilter dtoFilter) {
    return service.filter(dtoFilter, page, size);
  }
}