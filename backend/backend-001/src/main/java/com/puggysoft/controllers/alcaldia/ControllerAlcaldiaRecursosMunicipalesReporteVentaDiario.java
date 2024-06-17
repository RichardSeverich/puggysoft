package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCriteriaDay;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesReporteVentaDiario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReporteVentaDiario {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesReporteVentaDiario service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-reporte-venta-diario")
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesVenta>> postGetListReporteVentaDiario(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReporteCriteriaDay dtoReporteCriteria) {
    return service.getReporteVentasDiario(dtoReporteCriteria);
  }
}
