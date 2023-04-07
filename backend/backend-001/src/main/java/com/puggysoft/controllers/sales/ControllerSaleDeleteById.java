package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceSaleDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleDeleteById {

  @Autowired
  private ServiceSaleDeleteById serviceSaleDeleteById;

  @DeleteMapping(path = "/api/v1/sales/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceSaleDeleteById.deleteById(id);
  }
}
