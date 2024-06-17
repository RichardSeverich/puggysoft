package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCriteriaDay;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCriteriaMonth;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVentasReporte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceAlcaldiaRecursosMunicipalesReporteVentaMensual {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVentasReporte IRRecusosMunicipalesVentasReporte;

  /**
   * method for retrieve.
   */
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesVenta>> getReporteVentasMensual(
      DtoAlcaldiaRecursosMunicipalesReporteCriteriaMonth dtoCriteria){

    List<DtoAlcaldiaRecursosMunicipalesVenta> listDtoVentasDiarias = IRRecusosMunicipalesVentasReporte.getMonthReport(
        dtoCriteria.nameRecursoMunicipal,
            dtoCriteria.idRecursoMunipal,
            dtoCriteria.status.toString(),
            dtoCriteria.tenant,
            dtoCriteria.year,
            dtoCriteria.month)
        .stream().map(DtoAlcaldiaRecursosMunicipalesVenta::entityToDto)
        .collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(listDtoVentasDiarias);
  }
}
