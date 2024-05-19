package com.puggysoft.dtos.qa;

import com.puggysoft.models.EnumCompareOperator;
import lombok.Data;

import javax.validation.constraints.Size;

/**
 * Class.
 */
@Data
public class DtoQaStepFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // TITLE
  public String titleCriteria;
  public EnumCompareOperator titleOperator;
  // DESCRIPTION
  public String descriptionCriteria;
  public EnumCompareOperator descriptionOperator;
  // EXPECTED RESULT
  public String expectedResultCriteria;
  public EnumCompareOperator expectedResultOperator;
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