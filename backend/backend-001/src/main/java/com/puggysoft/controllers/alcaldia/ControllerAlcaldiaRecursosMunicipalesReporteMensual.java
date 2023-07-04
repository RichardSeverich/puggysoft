package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteMensualCriteria;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteMensualResponse;
import com.puggysoft.services.alcaldia.ServicesAlcaldiaRecursosMunicipalesReporteMes;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReporteMensual {

  @Autowired
  private ServicesAlcaldiaRecursosMunicipalesReporteMes service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-reporte-mensual")
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReporteMensualResponse> alcaldiaReport(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReporteMensualCriteria dtoAlcaldiaRecursosMunicipalesReporteMensualCriteria) {
    return service.getReport(dtoAlcaldiaRecursosMunicipalesReporteMensualCriteria);
  }
}
