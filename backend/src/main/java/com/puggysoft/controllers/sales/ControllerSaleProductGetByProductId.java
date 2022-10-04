package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.services.sales.ServiceSaleProductGetByProductId;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleProductGetByProductId {

  @Autowired
  private ServiceSaleProductGetByProductId serviceSaleProductGetByProductId;

  @GetMapping(path = "/api/v1/sales-products/product-id/{id}")
  public ResponseEntity<List<DtoSaleProduct>> getById(@PathVariable Long id) {
    return serviceSaleProductGetByProductId.getByProductId(id);
  }
}