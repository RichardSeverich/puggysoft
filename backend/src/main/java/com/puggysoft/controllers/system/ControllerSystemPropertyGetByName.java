package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoSystemProperty;
import com.puggysoft.services.system.ServiceSystemPropertyGetByName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSystemPropertyGetByName {

  @Autowired
  private ServiceSystemPropertyGetByName serviceSystemPropertyGetByName;

  // /api/v1/system-properties?systemPropertyNane={SYS_SALE_TYPE}
  @GetMapping(path = "/api/v1/system-properties")
  public ResponseEntity<DtoSystemProperty> getByName(@RequestParam String systemPropertyNane) {
    return serviceSystemPropertyGetByName.getByName(systemPropertyNane);
  }
}