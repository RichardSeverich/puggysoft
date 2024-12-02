package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductGroupsProducts;
import com.puggysoft.services.sales.ServiceProductGroupsProductCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductGroupsProductsPost {
  @Autowired
  private ServiceProductGroupsProductCreate service;

  @PostMapping(path = "/api/v1/product-groups-products")
  public ResponseEntity<String> post(@RequestBody @Valid DtoProductGroupsProducts dtoProductGroupsProducts) {
    return service.create(dtoProductGroupsProducts);
  }
}