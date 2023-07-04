package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.alcaldia.EnumEstadoVenta;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteAnualCriteria {

  @Size(min = 4, max = 4)
  @Pattern(regexp = "[0-9]*")
  public String year;

  public EnumEstadoVenta estadoVenta;
  public String tenant;
}
