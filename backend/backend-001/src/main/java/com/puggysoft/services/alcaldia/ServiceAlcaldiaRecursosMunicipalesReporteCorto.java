package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCortoResponse;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReportCriteria;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesReporteCorto;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesReport;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 * Services for get by id.
 */
@Service
public class ServiceAlcaldiaRecursosMunicipalesReporteCorto {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursos;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesReport repositoryReport;

  /**
   * method for retrieve.
   */
  public ResponseEntity<DtoAlcaldiaRecursosMunicipalesReporteCortoResponse> getReport(
        DtoAlcaldiaRecursosMunicipalesReportCriteria criteria) {
    String estadoVenta = criteria.estadoVenta.toString();
    String tenant = criteria.tenant;
    String fecha = criteria.fecha;

    List<DtoAlcaldiaRecursosMunicipales> listOfRecursosPadres = repositoryAlcaldiaRecursos
        .findAlcaldiaRecursosMunicipalesfatherNotRepeatName()
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());
    DtoAlcaldiaRecursosMunicipalesReporteCortoResponse reportResult = new DtoAlcaldiaRecursosMunicipalesReporteCortoResponse();
    List<DtoAlcaldiaRecursosMunicipalesReporteCorto> listaPadres = new ArrayList<>();

    for (DtoAlcaldiaRecursosMunicipales recursoPadre : listOfRecursosPadres) {
      DtoAlcaldiaRecursosMunicipalesReporteCorto padreByList = new DtoAlcaldiaRecursosMunicipalesReporteCorto();
      padreByList.setCodigoRecursoMunicipal(recursoPadre.getCodigo());
      padreByList.setCodigoAuxiliarRecursoMunicipal(recursoPadre.getCodigoAuxiliar());
      padreByList.setNombreRecursoMunicipal(recursoPadre.getName());
      Double totalPadre = 0.0;

      List<DtoAlcaldiaRecursosMunicipales> listOfRecursosHijos = repositoryAlcaldiaRecursos
        .findAlcaldiaRecursosMunicipalesHijoByPadreIdAll(recursoPadre.getId())
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());

      for (DtoAlcaldiaRecursosMunicipales recursoHijo : listOfRecursosHijos) {
        DtoAlcaldiaRecursosMunicipalesReporteCorto hijoByList = new DtoAlcaldiaRecursosMunicipalesReporteCorto();
        hijoByList.setCodigoRecursoMunicipal(recursoHijo.getCodigo());
        hijoByList.setCodigoAuxiliarRecursoMunicipal(recursoHijo.getCodigoAuxiliar());
        hijoByList.setNombreRecursoMunicipal(recursoHijo.getName());

        Double totalHijo = repositoryReport.getRevenuePerProductTotal(
          recursoHijo.getName(),
          estadoVenta,
          tenant,
          fecha);

        hijoByList.ventasTotales = totalHijo == null ? 0.0 : totalHijo;
        totalPadre = totalHijo == null ? totalPadre : (totalPadre + totalHijo);

        padreByList.arrayHijos.add(hijoByList);
      }
      padreByList.setVentasTotales(totalPadre);
      listaPadres.add(padreByList);
    }
    Double granTotal = repositoryReport.getRevenueTotal(
        estadoVenta,
        tenant,
        fecha);
    reportResult.listaPadres = listaPadres;
    reportResult.granTotal = granTotal == null ? 0.0 : granTotal;
    return ResponseEntity.status(HttpStatus.OK).body(reportResult);
  }
}
