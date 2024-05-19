package com.puggysoft.controllers.qa;

import com.puggysoft.services.qa.ServiceQaTestCaseTagDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerQaTestCaseTagDeleteById {

  @Autowired
  private ServiceQaTestCaseTagDeleteById service;

  @DeleteMapping(path = "/api/v1/qa-test-cases-tags/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return service.deleteById(id);
  }
}