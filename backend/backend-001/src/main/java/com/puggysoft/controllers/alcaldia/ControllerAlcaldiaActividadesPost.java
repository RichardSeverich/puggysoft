package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividades;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaActividadesCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaActividadesPost {
  @Autowired
  private ServiceAlcaldiaActividadesCreate service;

  @PostMapping(path = "/api/v1/alcaldia-actividades")
  public ResponseEntity<String> post(
      @RequestBody @Valid DtoAlcaldiaActividades dto) {
    return service.create(dto);
  }
}