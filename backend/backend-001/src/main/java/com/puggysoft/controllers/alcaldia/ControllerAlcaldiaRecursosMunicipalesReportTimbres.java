package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReport;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReportCriteria;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesReportTimbres;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReportTimbres {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesReportTimbres service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-report-timbres")
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReport> alcaldiaReportTimbres(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReportCriteria dtoAlcaldiaRecursosMunicipalesReportCriteria) {
    return service.getReport(dtoAlcaldiaRecursosMunicipalesReportCriteria);
  }
}
