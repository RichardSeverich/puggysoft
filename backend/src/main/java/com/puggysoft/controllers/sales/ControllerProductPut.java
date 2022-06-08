package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.services.sales.ServiceProductEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductPut {

  @Autowired
  private ServiceProductEditById serviceProductEditById;

  @PutMapping(path = "/api/v1/products/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoProduct dtoProduct) {
    return serviceProductEditById.editById(id, dtoProduct);
  }
}