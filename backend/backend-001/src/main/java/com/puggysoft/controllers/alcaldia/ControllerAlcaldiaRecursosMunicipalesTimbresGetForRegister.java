package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesTimbresGetForRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesTimbresGetForRegister {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesTimbresGetForRegister service;

  @GetMapping(path = "/api/v1/alcaldia-recursos-municipales-timbres-get-for-register")
  public ResponseEntity<String> getAlcaldiaRecursosMunicipalesFilter() {
    return service.filter();
  }
}