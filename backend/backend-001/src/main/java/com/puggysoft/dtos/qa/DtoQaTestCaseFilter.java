package com.puggysoft.dtos.qa;

import com.puggysoft.models.EnumCompareOperator;
import com.puggysoft.models.qa.EnumQaPriority;

import javax.validation.constraints.Size;

import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoQaTestCaseFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // TITLE
  public String titleCriteria;
  public EnumCompareOperator titleOperator;
  // DESCRIPTION
  public String descriptionCriteria;
  public EnumCompareOperator descriptionOperator;
  // PRIORITY
  public EnumQaPriority priorityCriteria;
  public EnumCompareOperator priorityOperator;
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