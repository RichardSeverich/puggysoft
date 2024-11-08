package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductGroupsFilter;
import com.puggysoft.services.sales.ServiceProductGroupsGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductGroupsGetFilterSize {

  @Autowired
  private ServiceProductGroupsGetFilterSize service;

  @PostMapping(path = "/api/v1/product-groups/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @PathVariable Long pageSize,
      @RequestBody @Valid DtoProductGroupsFilter dtoFilter
  ) {
    return service.getSize(dtoFilter, pageSize);
  }
}
