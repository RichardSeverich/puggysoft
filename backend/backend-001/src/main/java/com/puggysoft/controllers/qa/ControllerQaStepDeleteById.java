package com.puggysoft.controllers.qa;

import com.puggysoft.services.qa.ServiceQaStepDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerQaStepDeleteById {

  @Autowired
  private ServiceQaStepDeleteById serviceDeleteById;

  @DeleteMapping(path = "/api/v1/qa-steps/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceDeleteById.deleteById(id);
  }
}