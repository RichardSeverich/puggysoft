package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.services.sales.ServiceSaleProductGetAll;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleProductGetAll {

  @Autowired
  private ServiceSaleProductGetAll serviceSaleProductGetAll;

  @GetMapping(path = "/api/v1/sales-products")
  public ResponseEntity<List<DtoSaleProduct>> getAll() {
    return serviceSaleProductGetAll.getAll();
  }
}