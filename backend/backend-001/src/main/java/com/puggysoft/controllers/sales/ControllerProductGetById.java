package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.services.sales.ServiceProductGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductGetById {

  @Autowired
  private ServiceProductGetById serviceProductGetById;

  @GetMapping(path = "/api/v1/products/{id}")
  public ResponseEntity<DtoProduct> getById(@PathVariable Long id) {
    return serviceProductGetById.getById(id);
  }
}