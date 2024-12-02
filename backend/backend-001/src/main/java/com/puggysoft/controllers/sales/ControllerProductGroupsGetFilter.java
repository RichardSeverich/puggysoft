package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoProductGroups;
import com.puggysoft.dtos.sales.DtoProductGroupsFilter;
import com.puggysoft.services.sales.ServiceProductGroupsGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerProductGroupsGetFilter {

  @Autowired
  private ServiceProductGroupsGetFilter service;

  @PostMapping(path = "/api/v1/product-groups/filter")
  public ResponseEntity<List<DtoProductGroups>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoProductGroupsFilter dtoFilter) {
    return service.filter(dtoFilter, page, size);
  }
}
