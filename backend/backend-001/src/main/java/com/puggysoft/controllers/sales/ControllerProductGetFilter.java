package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.sales.ServiceProductGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductGetFilter {

  @Autowired
  private ServiceProductGetFilter serviceProductGetFilter;

  // products/filter?page=${activePage - 1}&size=${pageSize}
  @PostMapping(path = "/api/v1/products/filter")
  public ResponseEntity<List<DtoProduct>> getProducts(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoProductFilter dtoProductFilter) {
    return serviceProductGetFilter.filter(dtoProductFilter, page, size);
  }
}
