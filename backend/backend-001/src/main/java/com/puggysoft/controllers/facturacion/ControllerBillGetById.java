package com.puggysoft.controllers.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.services.facturacion.ServiceBillGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBillGetById {

  @Autowired
  private ServiceBillGetById serviceBillGetById;

  @GetMapping(path = "/api/v1/fac-bills/{id}")
  public ResponseEntity<DtoBill> getById(@PathVariable Long id) {
    return serviceBillGetById.getById(id);
  }
}