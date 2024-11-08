package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.sales.ServiceProductsByProductGroupsGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductsByProductGroupsGetFilter {

  @Autowired
  private ServiceProductsByProductGroupsGetFilter service;

  @PostMapping(path = "/api/v1/products-by-product-groups/filter")
  public ResponseEntity<List<DtoProduct>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String productGroup,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoProductFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, productGroup, contains);
  }
}
