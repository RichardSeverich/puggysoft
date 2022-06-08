package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceProductGetPaginationSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductPaginationSize {

  @Autowired
  private ServiceProductGetPaginationSize serviceProductGetPaginationSize;

  @GetMapping(path = "/api/v1/products/pagination/size/{pageSize}")
  public ResponseEntity<Long> getSize(@PathVariable Long pageSize) {
    return serviceProductGetPaginationSize.getSize(pageSize);
  }
}