package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceProductGetSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductGetSize {

  @Autowired
  private ServiceProductGetSize serviceProductGetSize;

  @GetMapping(path = "/api/v1/products/size")
  public ResponseEntity<Long> getSize() {
    return serviceProductGetSize.getSize();
  }
}