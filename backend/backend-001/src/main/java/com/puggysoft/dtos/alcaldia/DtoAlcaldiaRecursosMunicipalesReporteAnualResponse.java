package com.puggysoft.dtos.alcaldia;

import java.util.List;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteAnualResponse {

  public Double granTotal;
  public List<DtoAlcaldiaRecursosMunicipalesReporteAnual> resumenAnualProducto;
}
