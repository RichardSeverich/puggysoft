package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteAnual;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteAnualCriteria;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteAnualResponse;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesReport;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesReporteAnual {
  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursos;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesReport repositoryReport;

  /** method for retrive. */
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReporteAnualResponse> getReport(DtoAlcaldiaRecursosMunicipalesReporteAnualCriteria criteria) {
    String estadoVenta = criteria.estadoVenta.toString();
    String tenant = criteria.tenant;
    String year = criteria.year;
    List<DtoAlcaldiaRecursosMunicipales> listOfProducts = repositoryAlcaldiaRecursos
        .findAll()
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());
    DtoAlcaldiaRecursosMunicipalesReporteAnualResponse reportResult = new DtoAlcaldiaRecursosMunicipalesReporteAnualResponse();
    List<DtoAlcaldiaRecursosMunicipalesReporteAnual> reportResumenList = new ArrayList<>();

    for (DtoAlcaldiaRecursosMunicipales producto : listOfProducts) {
      DtoAlcaldiaRecursosMunicipalesReporteAnual reportResumen = new DtoAlcaldiaRecursosMunicipalesReporteAnual();

      Double january = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 1);
      Double february = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 2);
      Double march = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 3);
      Double april = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 4);
      Double may = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 5);
      Double june = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 6);
      Double july = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 7);
      Double august = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 8);
      Double september = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 9);
      Double october = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 10);
      Double november = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 11);
      Double december = repositoryReport.getReportePorProductoTotalMensual(producto.getName(), estadoVenta, tenant, year, 12);
      january = january == null ? 0 : january;
      february = february == null ? 0 : february;
      march = march == null ? 0 : march;
      april = april == null ? 0 : april;
      may = may == null ? 0 : may;
      june = june == null ? 0 : june;
      july = july == null ? 0 : july;
      august = august == null ? 0 : august;
      september = september == null ? 0 : september;
      october = october == null ? 0 : october;
      november = november == null ? 0 : november;
      december = december == null ? 0 : december;

      reportResumen.setJanuary(january);
      reportResumen.setFebruary(february);
      reportResumen.setMarch(march);
      reportResumen.setApril(april);
      reportResumen.setMay(may);
      reportResumen.setJune(june);
      reportResumen.setJuly(july);
      reportResumen.setAugust(august);
      reportResumen.setSeptember(september);
      reportResumen.setOctober(october);
      reportResumen.setNovember(november);
      reportResumen.setDecember(december);

      Double totalPerProduct = repositoryReport.getReportePorProductoTotalAnual(
          producto.getName(),
          estadoVenta,
          tenant,
          year);
      reportResumen.ventasTotales = totalPerProduct == null ? 0 : totalPerProduct;
      reportResumen.codigoRecursoMunicipal = producto.getCodigo();
      reportResumen.nombreRecursoMunicipal = producto.getName();
      reportResumenList.add(reportResumen);
    }
    Double totalPerProduct = repositoryReport.getReporteTotalAnual(
        estadoVenta,
        tenant,
        year);
    reportResult.resumenAnualProducto = reportResumenList;
    reportResult.granTotal = totalPerProduct == null ? 0 : totalPerProduct;

    return ResponseEntity.status(HttpStatus.OK).body(reportResult);
  }
}