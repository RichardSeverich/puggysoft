package com.puggysoft.dtos.alcaldia;

import java.util.List;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteMensualResponse {

  public Double granTotal;
  public List<DtoAlcaldiaRecursosMunicipalesReporteMensual> resumenMensualProducto;
}
