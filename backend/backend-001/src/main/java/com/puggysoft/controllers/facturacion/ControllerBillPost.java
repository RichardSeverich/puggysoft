package com.puggysoft.controllers.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.services.facturacion.ServiceBillCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBillPost {

  @Autowired
  private ServiceBillCreate serviceBillCreate;

  @PostMapping(path = "/api/v1/fac-bills")
  public ResponseEntity<String> post(@RequestBody @Valid DtoBill dtoBill) {
    return serviceBillCreate.create(dtoBill);
  }
}
