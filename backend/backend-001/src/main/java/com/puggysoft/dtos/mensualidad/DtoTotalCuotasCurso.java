package com.puggysoft.dtos.mensualidad;

import lombok.Data;

/**
* Class.
*/
@Data
public class DtoTotalCuotasCurso {
  public Double totalEnrollment;
  public Double totalTuition;
  public Double totalOther;

  /**
   * Este constructor inicializa el dto
   *
   * @param totalEnrollment El total de mamtriculas.
   * @param totalTuition El total de colegiaturas & cuotas.
   * @param totalOther El total de otros.
  */
  public DtoTotalCuotasCurso(
      Double totalEnrollment,
      Double totalTuition,
      Double totalOther
  ) {
    this.totalEnrollment = totalEnrollment;
    this.totalTuition = totalTuition;
    this.totalOther = totalOther;
  }
}