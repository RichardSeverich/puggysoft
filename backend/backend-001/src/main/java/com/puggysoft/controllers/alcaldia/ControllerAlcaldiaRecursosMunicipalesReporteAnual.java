package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteAnualCriteria;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteAnualResponse;
import com.puggysoft.services.alcaldia.ServicesAlcaldiaRecursosMunicipalesReporteAnual;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReporteAnual {

  @Autowired
  private ServicesAlcaldiaRecursosMunicipalesReporteAnual service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-reporte-anual")
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReporteAnualResponse> alcaldiaReport(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReporteAnualCriteria dtoAlcaldiaRecursosMunicipalesReporteAnualCriteria) {
    return service.getReport(dtoAlcaldiaRecursosMunicipalesReporteAnualCriteria);
  }
}
