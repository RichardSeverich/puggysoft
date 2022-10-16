package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.sales.ServiceProductGetFilterSizeBySaleId;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductGetFilterSizeBySaleId {

  @Autowired
  private ServiceProductGetFilterSizeBySaleId serviceProductGetFilterSize;

  @PostMapping(path = "/api/v1/products/filter/size-by-sale-id")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoProductFilter dtoProductFilter,
      @RequestParam Long pageSize,
      @RequestParam Long saleId) {
    return serviceProductGetFilterSize.getSize(saleId, dtoProductFilter, pageSize);
  }

}
