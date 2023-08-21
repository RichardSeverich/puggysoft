package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetForVentas;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetForVentas {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetForVentas service;

  @GetMapping(path = "/api/v1/alcaldia-recursos-municipales-timbres-descontinuados-for-ventas")
  public ResponseEntity<List<Number>> getAlcaldiaRecursosMunicipalesFilter(
      @RequestParam int from,
      @RequestParam int to) {
    return service.filter(from, to);
  }
}