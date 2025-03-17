package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCriteriaYear;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesReporteVentaAnual;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReporteVentaAnual {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesReporteVentaAnual service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-reporte-venta-anual")
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesVenta>> postGetListReporteVentaMensual(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReporteCriteriaYear dtoReporteCriteria) {
    return service.getReporteVentasAnual(dtoReporteCriteria);
  }
}
