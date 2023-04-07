package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.services.sales.ServiceSaleProductEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleProductPut {

  @Autowired
  private ServiceSaleProductEditById serviceSaleProductEditById;

  @PutMapping(path = "/api/v1/sales-products/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoSaleProduct dtoSaleProduct) {
    return serviceSaleProductEditById.editById(id, dtoSaleProduct);
  }
}