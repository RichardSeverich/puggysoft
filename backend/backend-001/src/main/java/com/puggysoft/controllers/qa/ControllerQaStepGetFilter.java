package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaStep;
import com.puggysoft.dtos.qa.DtoQaStepFilter;
import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.services.qa.ServiceQaStepGetFilter;
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
public class ControllerQaStepGetFilter {

  @Autowired
  private ServiceQaStepGetFilter service;

  @PostMapping(path = "/api/v1/qa-steps/filter")
  public ResponseEntity<List<DtoQaStep>> getQaStepFilter(
          @RequestParam int page,
          @RequestParam int size,
          @RequestBody @Valid DtoQaStepFilter dtoFilter) {
    return service.filter(dtoFilter, page, size);
  }
}