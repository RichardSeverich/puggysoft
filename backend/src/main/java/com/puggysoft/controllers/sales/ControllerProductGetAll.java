package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.services.sales.ServiceProductGetAll;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductGetAll {

  @Autowired
  private ServiceProductGetAll serviceProductGetAll;

  @GetMapping(path = "/api/v1/products")
  public ResponseEntity<List<DtoProduct>> getAll() {
    return serviceProductGetAll.getAll();
  }
}