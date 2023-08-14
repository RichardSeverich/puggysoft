package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesGrupo;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesGrupoCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesGrupoPost {
  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesGrupoCreate service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-grupo")
  public ResponseEntity<String> post(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesGrupo dtoAlcaldiaRecursosMunicipalesGrupo) {
    return service.create(dtoAlcaldiaRecursosMunicipalesGrupo);
  }
}