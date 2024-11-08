package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductGroups;
import com.puggysoft.services.sales.ServiceProductGroupsCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductGroupPost {
  @Autowired
  private ServiceProductGroupsCreate serviceEscuelaNotasCreate;

  @PostMapping(path = "/api/v1/product-groups")
  public ResponseEntity<String> post(@RequestBody @Valid DtoProductGroups dtoGroupProducts) {
    return serviceEscuelaNotasCreate.create(dtoGroupProducts);
  }
}