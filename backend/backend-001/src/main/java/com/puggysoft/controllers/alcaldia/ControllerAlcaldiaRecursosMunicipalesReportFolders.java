package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReport;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReportCriteria;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesReportFolders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReportFolders {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesReportFolders service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-report-folders")
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReport> alcaldiaReportFolders(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReportCriteria dtoAlcaldiaRecursosMunicipalesReportCriteria) {
    return service.getReport(dtoAlcaldiaRecursosMunicipalesReportCriteria);
  }
}
