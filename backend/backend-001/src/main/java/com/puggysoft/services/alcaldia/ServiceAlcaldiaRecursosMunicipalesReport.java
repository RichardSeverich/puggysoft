package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReport;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReportCriteria;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReportItem;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReportResumen;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesReportItem;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesReport;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 * Services for get by id.
 */
@Service
public class ServiceAlcaldiaRecursosMunicipalesReport {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursos;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesReport repositoryReport;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle repositoryVentaDetalles;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVenta repositoryVentas;

  /**
   * method for retrieve.
   */
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReport> getReport(
      DtoAlcaldiaRecursosMunicipalesReportCriteria criteria) {
    String estadoVenta = criteria.estadoVenta.toString();
    String tenant = criteria.tenant;
    String fecha = criteria.fecha;
    List<DtoAlcaldiaRecursosMunicipales> listOfProducts = getAllResources(tenant);
    DtoAlcaldiaRecursosMunicipalesReport reportResult = new DtoAlcaldiaRecursosMunicipalesReport();
    List<DtoAlcaldiaRecursosMunicipalesReportResumen> reportResumenList = new ArrayList<>();
    for (DtoAlcaldiaRecursosMunicipales producto : listOfProducts) {
      DtoAlcaldiaRecursosMunicipalesReportResumen reportResumen = new DtoAlcaldiaRecursosMunicipalesReportResumen();
      // Get Details
      // Obtener todas las ventas de un determinado producto en una determinada fecha.
      List<EntityAlcaldiaRecursosMunicipalesVenta> ventasDeUnProducto =
          repositoryVentas.getVentaDeUnProducto(producto.getId(),
              estadoVenta,
              tenant,
              fecha);
      List<DtoAlcaldiaRecursosMunicipalesReportItem> listReportItems = new ArrayList<>();
      // obtener todos los detalles de una venta
      for (EntityAlcaldiaRecursosMunicipalesVenta venta : ventasDeUnProducto) {
        List<EntityAlcaldiaRecursosMunicipalesVentaDetalle> ventaDetalle = repositoryVentaDetalles
            .getVentasDeUnVenta(producto.getId(),
                estadoVenta,
                tenant,
                venta.getId());
        // Recorremos todos los detalles
        for (EntityAlcaldiaRecursosMunicipalesVentaDetalle detalle : ventaDetalle) {
          DtoAlcaldiaRecursosMunicipalesReportItem reportItem = new DtoAlcaldiaRecursosMunicipalesReportItem();
          String numeroVenta = venta.getNumeroComprobante();
          reportItem.setNumeroVenta(numeroVenta);
          Double ingresoVenta = Double.parseDouble(detalle.getCantidad()) * Double.parseDouble(detalle.getPrecioUnidad());
          reportItem.setIngresoVenta(String.valueOf(ingresoVenta));
          listReportItems.add(reportItem);
        }
      }
      // Get total
      reportResumen.resumenVentas = listReportItems;
      Double totalPerProduct = repositoryReport.getRevenuePerProductTotal(
          producto.getId(),
          estadoVenta,
          tenant,
          fecha);
      reportResumen.ventasTotales = totalPerProduct == null ? 0 : totalPerProduct;
      reportResumen.codigoRecursoMunicipal = producto.getCodigo();
      reportResumen.nombreRecursoMunicipal = producto.getName();
      reportResumenList.add(reportResumen);
    }
    Double totalPerProduct = repositoryReport.getRevenueTotal(
        estadoVenta,
        tenant,
        fecha);
    reportResult.resumenVentasPorProducto = reportResumenList;
    reportResult.granTotal = totalPerProduct == null ? 0 : totalPerProduct;
    return ResponseEntity.status(HttpStatus.OK).body(reportResult);
  }

  public List<DtoAlcaldiaRecursosMunicipales> getAllResources(String tenant) {
    List<DtoAlcaldiaRecursosMunicipales> listOfProducts = repositoryAlcaldiaRecursos
        .findAlcaldiaRecursosMunicipalesKidsNotRepeatName(tenant)
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());
    return listOfProducts;
  }

}
