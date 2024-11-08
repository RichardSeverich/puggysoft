package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductGroups;
import com.puggysoft.services.sales.ServiceProductGroupsEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductGroupsPut {

  @Autowired
  private ServiceProductGroupsEditById service;

  @PutMapping(path = "/api/v1/product-groups/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoProductGroups dto) {
    return service.editById(id, dto);
  }
}