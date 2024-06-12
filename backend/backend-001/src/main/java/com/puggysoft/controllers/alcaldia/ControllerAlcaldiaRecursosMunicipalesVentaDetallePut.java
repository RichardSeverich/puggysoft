package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesVentaDetalleEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesVentaDetallePut {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesVentaDetalleEditById service;

  @PutMapping(path = "/api/v1/alcaldia-recursos-municipales-ventas-detalle/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesVentaDetalle dto) {
    return service.editById(id, dto);
  }
}
