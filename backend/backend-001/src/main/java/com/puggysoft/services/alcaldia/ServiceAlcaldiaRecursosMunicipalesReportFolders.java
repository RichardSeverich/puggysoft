package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.*;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesReportItem;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Services for get by id.
 */
@Service
public class ServiceAlcaldiaRecursosMunicipalesReportFolders {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursos;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesReport repositoryReport;

  /**
   * method for retrieve.
   */
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReport> getReport(
      DtoAlcaldiaRecursosMunicipalesReportCriteria criteria) {
    String estadoVenta = criteria.estadoVenta.toString();
    String tenant = criteria.tenant;
    String fecha = criteria.fecha;

    List<DtoAlcaldiaRecursosMunicipales> listOfProducts = repositoryAlcaldiaRecursos
        .findAlcaldiaRecursosMunicipalesKidsNotRepeatNameFolders(tenant)
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());

    DtoAlcaldiaRecursosMunicipalesReport reportResult = new DtoAlcaldiaRecursosMunicipalesReport();
    List<DtoAlcaldiaRecursosMunicipalesReportResumen> reportResumenList = new ArrayList<>();
    for (DtoAlcaldiaRecursosMunicipales producto : listOfProducts) {
      DtoAlcaldiaRecursosMunicipalesReportResumen reportResumen = new DtoAlcaldiaRecursosMunicipalesReportResumen();
      List<EntityAlcaldiaRecursosMunicipalesReportItem> listReportItemsEntities = repositoryReport.getRevenueSummary(
          producto.getName(),
          estadoVenta,
          tenant,
          fecha);
      List<DtoAlcaldiaRecursosMunicipalesReportItem> listReportItems = listReportItemsEntities
          .stream()
          .map(DtoAlcaldiaRecursosMunicipalesReportItem::entityToDto)
          .collect(Collectors.toList());
      reportResumen.resumenVentas = listReportItems;
      Double totalPerProduct = repositoryReport.getRevenuePerProductTotal(
          producto.getName(),
          estadoVenta,
          tenant,
          fecha);
      reportResumen.ventasTotales = totalPerProduct == null ? 0 : totalPerProduct;
      reportResumen.codigoRecursoMunicipal = producto.getCodigo();
      reportResumen.nombreRecursoMunicipal = producto.getName();
      reportResumenList.add(reportResumen);
    }
    Double totalPerProduct = repositoryReport.getIngresoTotalDiario(
        "FOLDERS",
        estadoVenta,
        tenant,
        fecha);
    reportResult.resumenVentasPorProducto = reportResumenList;
    reportResult.granTotal = totalPerProduct == null ? 0 : totalPerProduct;
    return ResponseEntity.status(HttpStatus.OK).body(reportResult);
  }
}
