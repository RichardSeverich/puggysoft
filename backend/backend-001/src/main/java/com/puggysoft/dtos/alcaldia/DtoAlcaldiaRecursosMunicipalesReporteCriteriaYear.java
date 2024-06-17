package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.alcaldia.EnumEstadoVenta;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteCriteriaYear {

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

}
