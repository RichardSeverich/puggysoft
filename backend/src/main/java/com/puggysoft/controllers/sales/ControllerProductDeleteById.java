package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceProductDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductDeleteById {

  @Autowired
  private ServiceProductDeleteById serviceProductDeleteById;

  @DeleteMapping(path = "/api/v1/products/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceProductDeleteById.deleteById(id);
  }
}
