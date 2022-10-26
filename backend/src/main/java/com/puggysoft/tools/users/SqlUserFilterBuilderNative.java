package com.puggysoft.tools.users;

import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.tools.SqlFilterBuilder;
import com.puggysoft.tools.SqlFilterBuilderBoolean;


/** Tool class.*/
public final class SqlUserFilterBuilderNative {

  /** Constructor.*/
  private SqlUserFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoUserFilter dtoUserFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoUserFilter.idCriteria, dtoUserFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("username", dtoUserFilter.usernameCriteria, dtoUserFilter.usernameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("password", dtoUserFilter.passwordCriteria, dtoUserFilter.passwordOperator);
    query = query + SqlFilterBuilder.getFilterQuery("dni", dtoUserFilter.dniCriteria, dtoUserFilter.dniOperator);
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoUserFilter.nameCriteria, dtoUserFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("second_name", dtoUserFilter.secondNameCriteria, dtoUserFilter.secondNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("last_name", dtoUserFilter.lastNameCriteria, dtoUserFilter.lastNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("second_last_name", dtoUserFilter.secondLastNameCriteria, dtoUserFilter.secondLastNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("birth_date", dtoUserFilter.birthDateCriteria, dtoUserFilter.birthDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("age", dtoUserFilter.ageCriteria, dtoUserFilter.ageOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sex", dtoUserFilter.sexCriteria, dtoUserFilter.sexOperator);
    query = query + SqlFilterBuilder.getFilterQuery("occupation", dtoUserFilter.occupationCriteria, dtoUserFilter.occupationOperator);
    query = query + SqlFilterBuilder.getFilterQuery("telephone", dtoUserFilter.telephoneCriteria, dtoUserFilter.telephoneOperator);
    query = query + SqlFilterBuilder.getFilterQuery("address", dtoUserFilter.addressCriteria, dtoUserFilter.addressOperator);
    query = query + SqlFilterBuilder.getFilterQuery("email", dtoUserFilter.emailCriteria, dtoUserFilter.emailOperator);
    query = query + SqlFilterBuilderBoolean.getFilterQuery("active", dtoUserFilter.activeCriteria, dtoUserFilter.activeOperator);
    query = query + SqlFilterBuilderBoolean.getFilterQuery("email_verified", dtoUserFilter.emailVerifiedCriteria, dtoUserFilter.emailVerifiedOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoUserFilter.createdByCriteria, dtoUserFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoUserFilter.updatedByCriteria, dtoUserFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoUserFilter.creationDateCriteria, dtoUserFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoUserFilter.updateDateCriteria, dtoUserFilter.updateDateOperator);
    return query;
  }

}