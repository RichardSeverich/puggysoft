package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesFoldersGetForRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesFoldersGetForRegister {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesFoldersGetForRegister service;

  @GetMapping(path = "/api/v1/alcaldia-recursos-municipales-folders-get-for-register")
  public ResponseEntity<String> getAlcaldiaRecursosMunicipalesFilter() {
    return service.filter();
  }
}