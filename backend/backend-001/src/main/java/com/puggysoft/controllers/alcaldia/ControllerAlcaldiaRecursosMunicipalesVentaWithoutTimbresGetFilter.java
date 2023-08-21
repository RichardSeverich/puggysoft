package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilter {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilter service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-ventas-without-timbres/filter")
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesVenta>> getAlcaldiaRecursosMunicipalesVentaFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesVentaFilter dtoAlcaldiaRecursosMunicipalesVentaFilter) {
    return service.filter(dtoAlcaldiaRecursosMunicipalesVentaFilter, page,
        size);
  }
}