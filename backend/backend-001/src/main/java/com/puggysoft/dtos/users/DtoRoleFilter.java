package com.puggysoft.dtos.users;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
* Class.
*/
@Data
public class DtoRoleFilter {

  public String idCriteria;
  public EnumCompareOperator idOperator;
  @Size(max = 30)
  public String nameCriteria;
  public EnumCompareOperator nameOperator;
  @Size(max = 20)
  public String createdByCriteria;
  public EnumCompareOperator createdByOperator;
  @Size(max = 20)
  public String updatedByCriteria;
  public EnumCompareOperator updatedByOperator;
  public String creationDateCriteria;
  public EnumCompareOperator creationDateOperator;
  public String updateDateCriteria;
  public EnumCompareOperator updateDateOperator;

}