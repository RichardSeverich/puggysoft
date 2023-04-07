package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.services.sales.ServiceSaleGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleGetById {

  @Autowired
  private ServiceSaleGetById serviceSaleGetById;

  @GetMapping(path = "/api/v1/sales/{id}")
  public ResponseEntity<DtoSale> getById(@PathVariable Long id) {
    return serviceSaleGetById.getById(id);
  }
}