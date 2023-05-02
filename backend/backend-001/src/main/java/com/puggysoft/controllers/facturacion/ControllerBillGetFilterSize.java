package com.puggysoft.controllers.facturacion;

import com.puggysoft.dtos.facturacion.DtoBillFilter;
import com.puggysoft.services.facturacion.ServiceBillGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBillGetFilterSize {

  @Autowired
  private ServiceBillGetFilterSize serviceBillGetFilterSize;

  @PostMapping(path = "/api/v1/fac-bills/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoBillFilter dtoBillFilter, @PathVariable Long pageSize) {
    return serviceBillGetFilterSize.getSize(dtoBillFilter, pageSize);
  }

}
