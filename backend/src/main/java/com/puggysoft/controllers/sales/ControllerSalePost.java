package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.services.sales.ServiceSaleCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSalePost {

  @Autowired
  private ServiceSaleCreate serviceSaleCreate;

  @PostMapping(path = "/api/v1/sales")
  public ResponseEntity<String> post(@RequestBody @Valid DtoSale dtoSale) {
    return serviceSaleCreate.create(dtoSale);
  }
}
