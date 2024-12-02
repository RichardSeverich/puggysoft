package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceProductGroupsDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductGroupsDeleteById {

  @Autowired
  private ServiceProductGroupsDeleteById serviceDeleteById;

  @DeleteMapping(path = "/api/v1/product-groups/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceDeleteById.deleteById(id);
  }
}
