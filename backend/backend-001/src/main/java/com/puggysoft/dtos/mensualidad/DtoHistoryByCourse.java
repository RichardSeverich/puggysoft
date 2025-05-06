package com.puggysoft.dtos.mensualidad;

import lombok.Data;

/**
* Class.
*/
@Data
public class DtoHistoryByCourse {
  public String ci;
  public Double paidEnrollment;
  public Double paidTuition;
  public Double paidOther;
  public Double debtEnrollment;
  public Double debtTuition;
  public Double debtOther;

  /**
   * Este constructor inicializa el dto
   *
   * @param ci user.dni.
   * @param paidEnrollment pago matricula.
   * @param paidTuition pago colegiatura.
   * @param paidOther pago otros.
   * @param debtEnrollment deudas matriculas.
   * @param debtTuition deudas colegiaturas.
   * @param debtOther deudas otros.
  */
  public DtoHistoryByCourse(
      String ci,
      Double paidEnrollment,
      Double paidTuition,
      Double paidOther,
      Double debtEnrollment,
      Double debtTuition,
      Double debtOther
  ) {
    this.ci = ci;
    this.paidEnrollment = paidEnrollment;
    this.paidTuition = paidTuition;
    this.paidOther = paidOther;
    this.debtEnrollment = debtEnrollment;
    this.debtTuition = debtTuition;
    this.debtOther = debtOther;
  }
}