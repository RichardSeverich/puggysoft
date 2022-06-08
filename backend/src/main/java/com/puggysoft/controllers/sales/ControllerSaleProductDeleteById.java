package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceSaleProductDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleProductDeleteById {

  @Autowired
  private ServiceSaleProductDeleteById serviceSaleProductDeleteById;

  @DeleteMapping(path = "/api/v1/sales-products/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceSaleProductDeleteById.deleteById(id);
  }
}
