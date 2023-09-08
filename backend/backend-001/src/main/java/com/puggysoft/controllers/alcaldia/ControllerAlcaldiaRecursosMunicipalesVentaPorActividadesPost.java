package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesVentaPorActividades;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesVentaPorActividadesPost {
  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesVentaPorActividades service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-ventas-por-actividades")
  public ResponseEntity<String> post(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesVentaDetalle dtoAlcaldiaRecursosMunicipalesVentaDetalle) {
    return service.create(dtoAlcaldiaRecursosMunicipalesVentaDetalle);
  }
}