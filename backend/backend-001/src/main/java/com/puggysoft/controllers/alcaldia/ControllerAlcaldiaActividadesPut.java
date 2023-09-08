package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividades;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaActividadesEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaActividadesPut {

  @Autowired
  private ServiceAlcaldiaActividadesEditById service;

  @PutMapping(path = "/api/v1/alcaldia-actividades/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoAlcaldiaActividades dto) {
    return service.editById(id, dto);
  }
}
