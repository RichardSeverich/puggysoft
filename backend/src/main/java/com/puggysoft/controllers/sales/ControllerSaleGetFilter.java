package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.dtos.sales.DtoSaleFilter;
import com.puggysoft.services.sales.ServiceSaleGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSaleGetFilter {

  @Autowired
  private ServiceSaleGetFilter serviceSaleGetFilter;

  @PostMapping(path = "/api/v1/sales/filter")
  public ResponseEntity<List<DtoSale>> getSales(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoSaleFilter dtoSaleFilter) {
    return serviceSaleGetFilter.filter(dtoSaleFilter, page, size);
  }
}
