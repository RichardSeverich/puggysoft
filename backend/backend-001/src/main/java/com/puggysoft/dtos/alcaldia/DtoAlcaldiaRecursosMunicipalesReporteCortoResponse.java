package com.puggysoft.dtos.alcaldia;

import java.util.List;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteCortoResponse {

  public Double granTotal;
  public List<DtoAlcaldiaRecursosMunicipalesReporteCorto> listaPadres;
}
