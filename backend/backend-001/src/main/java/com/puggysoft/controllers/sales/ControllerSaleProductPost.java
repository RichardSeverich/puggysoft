package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.services.sales.ServiceSaleProductCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleProductPost {

  @Autowired
  private ServiceSaleProductCreate serviceSaleProductCreate;

  @PostMapping(path = "/api/v1/sales-products")
  public ResponseEntity<String> post(@RequestBody @Valid DtoSaleProduct dtoSaleProduct) {
    return serviceSaleProductCreate.create(dtoSaleProduct);
  }
}
