package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceClientDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerClientDeleteById {

  @Autowired
  private ServiceClientDeleteById serviceClientDeleteById;

  @DeleteMapping(path = "/api/v1/clients/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceClientDeleteById.deleteById(id);
  }
}
