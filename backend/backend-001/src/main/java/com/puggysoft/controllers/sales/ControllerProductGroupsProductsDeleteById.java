package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceProductGroupsProductsDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductGroupsProductsDeleteById {

  @Autowired
  private ServiceProductGroupsProductsDeleteById serviceDeleteById;

  @DeleteMapping(path = "/api/v1/product-groups-products/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceDeleteById.deleteById(id);
  }
}