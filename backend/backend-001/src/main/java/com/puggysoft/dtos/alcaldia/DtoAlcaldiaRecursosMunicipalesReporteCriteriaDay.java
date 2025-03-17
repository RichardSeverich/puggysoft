package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.alcaldia.EnumEstadoVenta;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteCriteriaDay {

  @NotNull
  public String nameRecursoMunicipal;

  @NotNull
  public Integer idRecursoMunipal;

  @NotNull
  public EnumEstadoVenta status;

  @NotNull
  public String tenant;

  @NotNull
  @Size(min = 10, max = 10)
  @Pattern(regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")
  public String yearMonthDay;

}
