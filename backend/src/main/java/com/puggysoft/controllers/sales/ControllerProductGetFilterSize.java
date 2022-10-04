package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.sales.ServiceProductGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductGetFilterSize {

  @Autowired
  private ServiceProductGetFilterSize serviceProductGetFilterSize;

  @PostMapping(path = "/api/v1/products/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoProductFilter dtoProductFilter, @PathVariable Long pageSize) {
    return serviceProductGetFilterSize.getSize(dtoProductFilter, pageSize);
  }

}
