package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.services.sales.ServiceClientGetAll;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerClientGetAll {

  @Autowired
  private ServiceClientGetAll serviceClientGetAll;

  @GetMapping(path = "/api/v1/clients")
  public ResponseEntity<List<DtoClient>> getAll() {
    return serviceClientGetAll.getAll();
  }
}