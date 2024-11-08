package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.sales.ServiceProductsByProductGroupsGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductsByProductGroupsGetFilterSize {

  @Autowired
  private ServiceProductsByProductGroupsGetFilterSize service;

  @PostMapping(path = "/api/v1/products-by-product-groups/filter/size")
  public ResponseEntity<Long> getSize(
      @RequestParam Long pageSize,
      @RequestParam String productGroup,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoProductFilter dtoFilter
  ) {
    return service.getSize(dtoFilter, pageSize, productGroup, contains);
  }
}
