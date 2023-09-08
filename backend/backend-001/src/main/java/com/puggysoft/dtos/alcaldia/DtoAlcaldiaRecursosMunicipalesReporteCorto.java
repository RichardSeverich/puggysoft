package com.puggysoft.dtos.alcaldia;

import java.util.ArrayList;

import lombok.Data;

/**
* Class.
*/
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteCorto {

  public Double ventasTotales;
  public String codigoRecursoMunicipal;
  public String codigoAuxiliarRecursoMunicipal;
  public String nombreRecursoMunicipal;

  public ArrayList<DtoAlcaldiaRecursosMunicipalesReporteCorto> arrayHijos = new ArrayList<DtoAlcaldiaRecursosMunicipalesReporteCorto>();
}