package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.services.sales.ServiceSaleProductGetBySaleId;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleProductGetBySaleId {

  @Autowired
  private ServiceSaleProductGetBySaleId serviceSaleProductGetBySaleId;

  @GetMapping(path = "/api/v1/sales-products/sale-id/{id}")
  public ResponseEntity<List<DtoSaleProduct>> getById(@PathVariable Long id) {
    return serviceSaleProductGetBySaleId.getBySaleId(id);
  }
}