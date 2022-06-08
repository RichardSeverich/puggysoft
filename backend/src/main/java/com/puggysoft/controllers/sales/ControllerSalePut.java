package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.services.sales.ServiceSaleEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSalePut {

  @Autowired
  private ServiceSaleEditById serviceSaleEditById;

  @PutMapping(path = "/api/v1/sales/{id}")
  public ResponseEntity<String> put(@PathVariable Long id, @RequestBody @Valid DtoSale dtoSale) {
    return serviceSaleEditById.editById(id, dtoSale);
  }
}