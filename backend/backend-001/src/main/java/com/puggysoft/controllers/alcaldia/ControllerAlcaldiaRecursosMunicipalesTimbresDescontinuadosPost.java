package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesTimbresDescontinuadosPost {
  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosCreate service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-timbres-descontinuados")
  public ResponseEntity<String> post(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados dto) {
    return service.create(dto);
  }
}