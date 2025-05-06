package com.puggysoft.dtos.mensualidad;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.Data;

/**
* Class.
*/
@Data
public class DtoHistoryByStudentAndCourse {
  public String fee;
  public Double amount;
  public String limitDate;
  public Date creationDate;
  public String status;
  public Long saleId;
  public boolean limitDateBool;

  private boolean inTime(String limitDateText) {
    try {
      String format = limitDateText.contains("-") ? "dd-MM-yyyy" : "dd/MM/yyyy";
      SimpleDateFormat sdf = new SimpleDateFormat(format);
      Date limitDate = sdf.parse(limitDateText);  // Convierte a Date
      Date fechaActual = new Date();
      return limitDate.before(fechaActual);
    } catch (ParseException e) {
      e.printStackTrace();
      return false;
    }
  }

  /**
   * Este constructor inicializa el dto
   *
   * @param fee products.name.
   * @param amount products.sale_price.
   * @param creationDate sales_products.creation_date.
   * @param status sales.status.
   * @param saleId sales.id.
   * @param limitDateText products.description.
  */
  public DtoHistoryByStudentAndCourse(
      String fee,
      Double amount,
      Date creationDate,
      String status,
      Long saleId,
      String limitDateText
  ) {
    this.fee = fee;
    this.amount = amount;
    this.limitDate = limitDateText;
    this.creationDate = creationDate;
    this.status = status;
    this.saleId = saleId;
    this.limitDateBool = inTime(limitDateText);
  }
}