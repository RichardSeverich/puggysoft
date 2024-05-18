package com.puggysoft.controllers.qa;

import com.puggysoft.services.qa.ServiceQaTestCaseDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerQaTestCaseDeleteById {

  @Autowired
  private ServiceQaTestCaseDeleteById serviceDeleteById;

  @DeleteMapping(path = "/api/v1/qa-test-cases/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceDeleteById.deleteById(id);
  }
}