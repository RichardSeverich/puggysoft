package com.puggysoft.dtos.sales;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
* Class.
*/
@Data
public class DtoSaleFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // CLIENT
  @Size(max = 30)
  public String clientCriteria;
  public EnumCompareOperator clientOperator;
  // STATUS: TODO, IN-PROGRESS, DONE.
  public String statusCriteria;
  public EnumCompareOperator statusOperator;
  // AUX
  public String auxCriteria;
  public EnumCompareOperator auxOperator;
  // TENANT
  public String tenantCriteria;
  public EnumCompareOperator tenantOperator;

  // TOTAL PRICE
  public String totalPriceCriteria;
  public EnumCompareOperator totalPriceOperator;

  // CUSTOMER CASH
  public String customerCashCriteria;
  public EnumCompareOperator customerCashOperator;

  // CUSTOMER CASH CHANGE
  public String customerCashChangeCriteria;
  public EnumCompareOperator customerCashChangeOperator;

  // CREATED BY
  @Size(max = 20)
  public String createdByCriteria;
  public EnumCompareOperator createdByOperator;
  // UPDATED BY
  @Size(max = 20)
  public String updatedByCriteria;
  public EnumCompareOperator updatedByOperator;
  // CREATION DATE
  public String creationDateCriteria;
  public EnumCompareOperator creationDateOperator;
  // UPDATED DATE
  public String updateDateCriteria;
  public EnumCompareOperator updateDateOperator;

}