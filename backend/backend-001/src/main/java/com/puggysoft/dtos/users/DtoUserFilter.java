package com.puggysoft.dtos.users;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
* Class.
*/
@Data
public class DtoUserFilter {

  public String idCriteria;
  public EnumCompareOperator idOperator;
  @Size(max = 30)
  public String usernameCriteria;
  public EnumCompareOperator usernameOperator;
  @Size(max = 30)
  public String passwordCriteria;
  public EnumCompareOperator passwordOperator;
  @Size(max = 30)
  public String dniCriteria;
  public EnumCompareOperator dniOperator;
  @Size(max = 30)
  public String nameCriteria;
  public EnumCompareOperator nameOperator;
  @Size(max = 30)
  public String secondNameCriteria;
  public EnumCompareOperator secondNameOperator;
  @Size(max = 30)
  public String lastNameCriteria;
  public EnumCompareOperator lastNameOperator;
  @Size(max = 30)
  public String secondLastNameCriteria;
  public EnumCompareOperator secondLastNameOperator;
  @Size(max = 10)
  public String birthDateCriteria;
  public EnumCompareOperator birthDateOperator;
  public String ageCriteria;
  public EnumCompareOperator ageOperator;
  @Size(max = 10)
  public String sexCriteria;
  public EnumCompareOperator sexOperator;
  @Size(max = 60)
  public String occupationCriteria;
  public EnumCompareOperator occupationOperator;
  @Size(max = 30)
  public String telephoneCriteria;
  public EnumCompareOperator telephoneOperator;
  @Size(max = 60)
  public String addressCriteria;
  public EnumCompareOperator addressOperator;
  @Size(max = 30)
  public String emailCriteria;
  public EnumCompareOperator emailOperator;
  public Boolean activeCriteria;
  public EnumCompareOperator activeOperator;
  public Boolean emailVerifiedCriteria;
  public EnumCompareOperator emailVerifiedOperator;
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