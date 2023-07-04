package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.alcaldia.EnumEstadoVenta;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteMensualCriteria {

  @Size(min = 4, max = 4)
  @Pattern(regexp = "[0-9]*")
  public String year;

  @Size(min = 2, max = 2)
  @Pattern(regexp = "0[1-9]|1[0-2]")
  public String month;

  public EnumEstadoVenta estadoVenta;
  public String tenant;
}
