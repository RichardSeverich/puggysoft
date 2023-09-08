package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesActividad;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesActividadesCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesActividadesPost {
  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesActividadesCreate service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-actividades")
  public ResponseEntity<String> post(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesActividad dto) {
    return service.create(dto);
  }
}