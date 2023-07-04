package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteMensual;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteMensualCriteria;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteMensualResponse;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesReport;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesAlcaldiaRecursosMunicipalesReporteMes {
  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursos;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesReport repositoryReport;

  /** method for retrive. */
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReporteMensualResponse> getReport(DtoAlcaldiaRecursosMunicipalesReporteMensualCriteria criteria) {
    String estadoVenta = criteria.estadoVenta.toString();
    String tenant = criteria.tenant;
    String year = criteria.year;
    String month = criteria.month;
    List<DtoAlcaldiaRecursosMunicipales> listOfProducts = repositoryAlcaldiaRecursos
        .findAll()
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());
    DtoAlcaldiaRecursosMunicipalesReporteMensualResponse reportResult = new DtoAlcaldiaRecursosMunicipalesReporteMensualResponse();
    List<DtoAlcaldiaRecursosMunicipalesReporteMensual> reportResumenList = new ArrayList<>();

    YearMonth yearMonthObject = YearMonth.of(Integer.parseInt(year), Integer.parseInt(month));
    int daysInMonth = yearMonthObject.lengthOfMonth();
    for (DtoAlcaldiaRecursosMunicipales producto : listOfProducts) {
      DtoAlcaldiaRecursosMunicipalesReporteMensual reportResumen = new DtoAlcaldiaRecursosMunicipalesReporteMensual();
      reportResumen.codigoRecursoMunicipal = producto.getCodigo();
      reportResumen.nombreRecursoMunicipal = producto.getName();
      for (int day = 1; day <= daysInMonth; day++) {
        String date = year + "-" + month + "-" + day;
        Double sumDay = repositoryReport.getRevenuePerProductTotal(producto.getCodigo(), estadoVenta, tenant, date);
        sumDay = sumDay == null ? 0 : sumDay;
        reportResumen.arrayDays.add(sumDay);
      }
      Double totalProductoMensual = repositoryReport.getReportePorProductoTotalMensual(producto.getCodigo(), estadoVenta, tenant, year, Integer.parseInt(month));
      reportResumen.ventasTotales = totalProductoMensual == null ? 0 : totalProductoMensual;
      reportResumenList.add(reportResumen);
    }
    Double totalMensual = repositoryReport.getReporteTotalMensual(estadoVenta, tenant, year, Integer.parseInt(month));
    reportResult.resumenMensualProducto = reportResumenList;
    reportResult.granTotal = totalMensual == null ? 0 : totalMensual;
    return ResponseEntity.status(HttpStatus.OK).body(reportResult);
  }
}