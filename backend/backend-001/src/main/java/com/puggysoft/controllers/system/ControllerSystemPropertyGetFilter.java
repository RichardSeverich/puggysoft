package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoSystemProperty;
import com.puggysoft.dtos.system.DtoSystemPropertyFilter;
import com.puggysoft.services.system.ServiceSystemPropertyGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSystemPropertyGetFilter {

  @Autowired
  private ServiceSystemPropertyGetFilter serviceSystemPropertyGetFilter;

  @PostMapping(path = "/api/v1/system-properties/filter")
  public ResponseEntity<List<DtoSystemProperty>> getSystemPropertys(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoSystemPropertyFilter dtoSystemPropertyFilter) {
    return serviceSystemPropertyGetFilter.filter(dtoSystemPropertyFilter, page, size);
  }
}
