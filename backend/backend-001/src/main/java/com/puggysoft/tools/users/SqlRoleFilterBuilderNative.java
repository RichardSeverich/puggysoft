package com.puggysoft.tools.users;

import com.puggysoft.dtos.users.DtoRoleFilter;
import com.puggysoft.tools.SqlFilterBuilder;


/** Tool class.*/
public final class SqlRoleFilterBuilderNative {

  /** Constructor.*/
  private SqlRoleFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoRoleFilter dtoRoleFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoRoleFilter.idCriteria, dtoRoleFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoRoleFilter.nameCriteria, dtoRoleFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoRoleFilter.createdByCriteria, dtoRoleFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoRoleFilter.updatedByCriteria, dtoRoleFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoRoleFilter.creationDateCriteria, dtoRoleFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoRoleFilter.updateDateCriteria, dtoRoleFilter.updateDateOperator);
    return query;
  }

}