package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.sales.ServiceProductGetFilterBySaleId;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerProductGetFilterBySaleId {

  @Autowired
  private ServiceProductGetFilterBySaleId serviceProductGetFilter;

  // products/filter?page=${activePage - 1}&size=${pageSize}&saleId=${saleId}
  @PostMapping(path = "/api/v1/products/filter-by-sale-id")
  public ResponseEntity<List<DtoProduct>> getProducts(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam Long saleId,
      @RequestBody @Valid DtoProductFilter dtoProductFilter) {
    return serviceProductGetFilter.filter(saleId, dtoProductFilter, page, size);
  }
}
