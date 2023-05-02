package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoTenant;
import com.puggysoft.dtos.system.DtoTenantFilter;
import com.puggysoft.services.system.ServiceTenantGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerTenantGetFilter {

  @Autowired
  private ServiceTenantGetFilter serviceTenantGetFilter;

  // tenants/filter?page=${activePage - 1}&size=${pageSize}
  @PostMapping(path = "/api/v1/tenants/filter")
  public ResponseEntity<List<DtoTenant>> getTenants(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoTenantFilter dtoTenantFilter) {
    return serviceTenantGetFilter.filter(dtoTenantFilter, page, size);
  }
}
