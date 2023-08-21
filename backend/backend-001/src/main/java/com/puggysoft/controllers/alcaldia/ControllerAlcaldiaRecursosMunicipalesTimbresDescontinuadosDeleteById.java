package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesTimbresDescontinuadosDeleteById {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosDeleteById service;

  @DeleteMapping(path = "/api/v1/alcaldia-recursos-municipales-timbres-descontinuados/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return service.deleteById(id);
  }
}