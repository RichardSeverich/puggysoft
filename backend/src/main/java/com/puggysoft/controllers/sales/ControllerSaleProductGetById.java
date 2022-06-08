package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.services.sales.ServiceSaleProductGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleProductGetById {

  @Autowired
  private ServiceSaleProductGetById serviceSaleProductGetById;

  @GetMapping(path = "/api/v1/sales-products/{id}")
  public ResponseEntity<DtoSaleProduct> getById(@PathVariable Long id) {
    return serviceSaleProductGetById.getById(id);
  }
}