package com.puggysoft.controllers.facturacion;

import com.puggysoft.dtos.facturacion.DtoBill;
import com.puggysoft.dtos.facturacion.DtoBillFilter;
import com.puggysoft.services.facturacion.ServiceBillGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBillGetFilter {

  @Autowired
  private ServiceBillGetFilter serviceBillGetFilter;

  // products/filter?page=${activePage - 1}&size=${pageSize}
  @PostMapping(path = "/api/v1/fac-bills/filter")
  public ResponseEntity<List<DtoBill>> getBillFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoBillFilter dtoBillFilter) {
    return serviceBillGetFilter.filter(dtoBillFilter, page, size);
  }
}
