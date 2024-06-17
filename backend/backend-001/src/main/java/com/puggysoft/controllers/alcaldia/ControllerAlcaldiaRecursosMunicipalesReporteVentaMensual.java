package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCriteriaDay;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCriteriaMonth;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesReporteVentaMensual;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesReporteVentaMensual {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesReporteVentaMensual service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-reporte-venta-mensual")
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesVenta>> postGetListReporteVentaMensual(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesReporteCriteriaMonth dtoReporteCriteria) {
    return service.getReporteVentasMensual(dtoReporteCriteria);
  }
}
