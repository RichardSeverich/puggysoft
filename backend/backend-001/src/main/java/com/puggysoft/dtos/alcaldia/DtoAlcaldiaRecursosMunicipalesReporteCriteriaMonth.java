package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.alcaldia.EnumEstadoVenta;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteCriteriaMonth {

  @NotNull
  public String nameRecursoMunicipal;

  @NotNull
  public Integer idRecursoMunipal;

  @NotNull
  public EnumEstadoVenta status;

  @NotNull
  public String tenant;

  @NotNull
  @Pattern(regexp = "\\d{4}$")
  public String year;

  @NotNull
  @Pattern(regexp = "^(0?[1-9]|1[012])$")
  public String month;

}
