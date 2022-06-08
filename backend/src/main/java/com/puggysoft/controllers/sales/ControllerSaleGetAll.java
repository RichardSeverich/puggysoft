package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.services.sales.ServiceSaleGetAll;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleGetAll {

  @Autowired
  private ServiceSaleGetAll serviceSaleGetAll;

  @GetMapping(path = "/api/v1/sales")
  public ResponseEntity<List<DtoSale>> getAll() {
    return serviceSaleGetAll.getAll();
  }
}