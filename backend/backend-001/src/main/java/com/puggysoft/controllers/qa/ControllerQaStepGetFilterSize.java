package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaStepFilter;
import com.puggysoft.services.qa.ServiceQaStepGetFilterSize;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerQaStepGetFilterSize {

  @Autowired
  private ServiceQaStepGetFilterSize serviceGetFilterSize;

  @PostMapping(path = "/api/v1/qa-steps/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoQaStepFilter dtoFilter,
      @PathVariable Long pageSize) {
    return serviceGetFilterSize.getSize(dtoFilter,
        pageSize);
  }
}