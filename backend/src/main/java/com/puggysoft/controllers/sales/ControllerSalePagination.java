package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.services.sales.ServiceSaleGetPagination;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSalePagination {

  @Autowired
  private ServiceSaleGetPagination serviceSaleGetPagination;

  @GetMapping(path = "/api/v1/sales/pagination")
  public ResponseEntity<List<DtoSale>> getPagination(Pageable pageable) {
    return serviceSaleGetPagination.getPagination(pageable);
  }
}
