package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTag;
import com.puggysoft.services.qa.ServiceQaTagEditById;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerQaTagPut {

  @Autowired
  private ServiceQaTagEditById serviceEditById;

  @PutMapping(path = "/api/v1/qa-tags/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoQaTag dto) {
    return serviceEditById.editById(id, dto);
  }
}
