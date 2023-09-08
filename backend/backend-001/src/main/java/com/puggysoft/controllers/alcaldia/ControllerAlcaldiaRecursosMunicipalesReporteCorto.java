package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCortoResponse;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReportCriteria;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesReporteCorto;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReporteCorto {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesReporteCorto service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-reporte-corto")
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReporteCortoResponse> alcaldiaReport(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReportCriteria dtocriteria) {
    return service.getReport(dtocriteria);
  }
}
