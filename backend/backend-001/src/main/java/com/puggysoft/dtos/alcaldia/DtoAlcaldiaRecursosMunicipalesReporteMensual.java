package com.puggysoft.dtos.alcaldia;

import java.util.ArrayList;

import lombok.Data;

/**
* Class.
*/
@Data
public class DtoAlcaldiaRecursosMunicipalesReporteMensual {

  public Double ventasTotales;
  public String codigoRecursoMunicipal;
  public String nombreRecursoMunicipal;

  public ArrayList<Double> arrayDays = new ArrayList<>();
}