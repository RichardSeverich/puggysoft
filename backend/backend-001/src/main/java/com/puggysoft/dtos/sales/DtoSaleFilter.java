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
  // TENANT
  public String tenantCriteria;
  public EnumCompareOperator tenantOperator;
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