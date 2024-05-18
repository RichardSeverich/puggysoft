package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.services.qa.ServiceQaTestCaseGetFilterSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerQaTestCaseGetFilterSize {

  @Autowired
  private ServiceQaTestCaseGetFilterSize serviceGetFilterSize;

  @PostMapping(path = "/api/v1/qa-test-cases/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoQaTestCaseFilter dtoFilter,
      @PathVariable Long pageSize) {
    return serviceGetFilterSize.getSize(dtoFilter,
        pageSize);
  }
}