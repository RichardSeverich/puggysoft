package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.services.qa.ServiceQaTestCaseEditById;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerQaTestCasePut {

  @Autowired
  private ServiceQaTestCaseEditById serviceEditById;

  @PutMapping(path = "/api/v1/qa-test-cases/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoQaTestCase dto) {
    return serviceEditById.editById(id, dto);
  }
}
