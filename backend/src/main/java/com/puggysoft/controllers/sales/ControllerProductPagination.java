package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.services.sales.ServiceProductGetPagination;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductPagination {

  @Autowired
  private ServiceProductGetPagination serviceProductGetPagination;

  @GetMapping(path = "/api/v1/products/pagination")
  public ResponseEntity<List<DtoProduct>> getPagination(Pageable pageable) {
    return serviceProductGetPagination.getPagination(pageable);
  }
}
