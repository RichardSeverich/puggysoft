package com.puggysoft.controllers.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.services.facturacion.ServiceBillEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBillPut {

  @Autowired
  private ServiceBillEditById serviceBillEditById;

  @PutMapping(path = "/api/v1/fac-bills/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoBill dtoBill) {
    return serviceBillEditById.editById(id, dtoBill);
  }
}