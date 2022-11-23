package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoSystemProperty;
import com.puggysoft.services.system.ServiceSystemPropertyEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSystemPropertyPut {

  @Autowired
  private ServiceSystemPropertyEditById serviceSystemPropertyEditById;

  @PutMapping(path = "/api/v1/system-properties/{id}")
  public ResponseEntity<String> put(@PathVariable Long id, @RequestBody @Valid DtoSystemProperty dtoSystemProperty) {
    return serviceSystemPropertyEditById.editById(id, dtoSystemProperty);
  }
}