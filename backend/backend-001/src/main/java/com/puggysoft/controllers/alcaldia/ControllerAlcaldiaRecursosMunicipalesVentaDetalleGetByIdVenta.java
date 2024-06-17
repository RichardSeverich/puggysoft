package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesVentaDetalleGetByIdVenta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesVentaDetalleGetByIdVenta {
  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesVentaDetalleGetByIdVenta service;

  @GetMapping(path = "/api/v1/alcaldia-recursos-municipales-ventas-detalle-get-by-idVenta/{idVenta}")
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesVentaDetalle> getVentaDetalleByIdVenta(@PathVariable Integer idVenta) {
    return service.getDtoRecursosMunicipalesVentaDetalleByIdVenta(idVenta);
  }
}