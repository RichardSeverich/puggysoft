package com.puggysoft.dtos.system;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
* Class.
*/
@Data
public class DtoTenantFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // NAME
  public String nameCriteria;
  public EnumCompareOperator nameOperator;
  // SHORT NAME
  public String shortNameCriteria;
  public EnumCompareOperator shortNameOperator;
  // DESCRIPTION
  public String descriptionCriteria;
  public EnumCompareOperator descriptionOperator;
  // TELEPHONE
  public String telephoneCriteria;
  public EnumCompareOperator telephoneOperator;
  // ADDRESS
  public String addressCriteria;
  public EnumCompareOperator addressOperator;
  // IMAGE
  public String imageCriteria;
  public EnumCompareOperator imageOperator;
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