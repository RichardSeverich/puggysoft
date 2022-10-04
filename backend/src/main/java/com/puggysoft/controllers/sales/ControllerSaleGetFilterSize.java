package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleFilter;
import com.puggysoft.services.sales.ServiceSaleGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleGetFilterSize {

  @Autowired
  private ServiceSaleGetFilterSize serviceSaleGetFilterSize;

  @PostMapping(path = "/api/v1/sales/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoSaleFilter dtoSaleFilter, @PathVariable Long pageSize) {
    return serviceSaleGetFilterSize.getSize(dtoSaleFilter, pageSize);
  }

}
