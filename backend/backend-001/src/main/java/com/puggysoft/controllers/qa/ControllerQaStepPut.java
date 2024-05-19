package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaStep;
import com.puggysoft.services.qa.ServiceQaStepEditById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerQaStepPut {

  @Autowired
  private ServiceQaStepEditById serviceEditById;

  @PutMapping(path = "/api/v1/qa-steps/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoQaStep dto) {
    return serviceEditById.editById(id, dto);
  }
}
