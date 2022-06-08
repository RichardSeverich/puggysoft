package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.services.sales.ServiceProductCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductPost {

  @Autowired
  private ServiceProductCreate serviceProductCreate;

  @PostMapping(path = "/api/v1/products")
  public ResponseEntity<String> post(@RequestBody @Valid DtoProduct dtoProduct) {
    return serviceProductCreate.create(dtoProduct);
  }
}
