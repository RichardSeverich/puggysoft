package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCriteriaDay;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVentasReporte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceAlcaldiaRecursosMunicipalesReporteVentaDiario {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVentasReporte IRRecusosMunicipalesVentasReporte;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle repositoryVentaDetalles;

  /**
   * method for retrieve.
   */
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesVenta>> getReporteVentasDiario(
      DtoAlcaldiaRecursosMunicipalesReporteCriteriaDay dtoCriteria) {
    List<DtoAlcaldiaRecursosMunicipalesVenta> listDtoVentasDiarias = IRRecusosMunicipalesVentasReporte.getDailyReport(
        dtoCriteria.nameRecursoMunicipal,
        dtoCriteria.idRecursoMunipal,
        dtoCriteria.status.toString(),
        dtoCriteria.tenant,
        dtoCriteria.yearMonthDay)
        .stream().map(DtoAlcaldiaRecursosMunicipalesVenta::entityToDto)
        .collect(Collectors.toList());

    for (DtoAlcaldiaRecursosMunicipalesVenta venta : listDtoVentasDiarias) {
      // Obtenemos todos los detalles de una venta, (Estos detalles pueden incluir otros recursos vendidos)
      List<EntityAlcaldiaRecursosMunicipalesVentaDetalle> ventaDetalle = repositoryVentaDetalles
          .getVentasDeUnVenta(new Long(dtoCriteria.idRecursoMunipal),
              dtoCriteria.status.toString(),
              dtoCriteria.tenant,
              venta.getId());
      // Recorremos todos los detalles y verificamos que solo sumen los que son timbres
      for (EntityAlcaldiaRecursosMunicipalesVentaDetalle detalle : ventaDetalle) {
        Double ingresoVenta = 0d;
        if (detalle.getIdRecursoMunicipal().equals(dtoCriteria.idRecursoMunipal.toString())) {
          ingresoVenta = ingresoVenta + Double.parseDouble(detalle.getCantidad()) * Double.parseDouble(detalle.getPrecioUnidad());
        }
        venta.setVentaPrecioTotal(ingresoVenta.toString());
      }
    }
    return ResponseEntity.status(HttpStatus.OK).body(listDtoVentasDiarias);
  }
}
