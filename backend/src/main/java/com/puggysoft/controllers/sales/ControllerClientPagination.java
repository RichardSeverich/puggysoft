package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.services.sales.ServiceClientGetPagination;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerClientPagination {

  @Autowired
  private ServiceClientGetPagination serviceClientGetPagination;

  @GetMapping(path = "/api/v1/clients/pagination")
  public ResponseEntity<List<DtoClient>> getPagination(Pageable pageable) {
    return serviceClientGetPagination.getPagination(pageable);
  }
}
