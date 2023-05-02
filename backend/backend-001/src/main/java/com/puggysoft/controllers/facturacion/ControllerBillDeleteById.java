package com.puggysoft.controllers.facturacion;

import com.puggysoft.services.facturacion.ServiceBillDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBillDeleteById {

  @Autowired
  private ServiceBillDeleteById serviceBillDeleteById;

  @DeleteMapping(path = "/api/v1/fac-bills/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceBillDeleteById.deleteById(id);
  }
}
