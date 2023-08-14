package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesGrupoDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesGrupoDeleteById {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesGrupoDeleteById service;

  @DeleteMapping(path = "/api/v1/alcaldia-recursos-municipales-grupo/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return service.deleteById(id);
  }
}