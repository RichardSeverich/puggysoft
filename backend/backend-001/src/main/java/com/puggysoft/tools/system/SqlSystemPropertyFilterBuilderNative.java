package com.puggysoft.tools.system;

import com.puggysoft.dtos.system.DtoSystemPropertyFilter;
import com.puggysoft.tools.SqlFilterBuilder;


/** Tool class.*/
public final class SqlSystemPropertyFilterBuilderNative {

  /** Constructor.*/
  private SqlSystemPropertyFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoSystemPropertyFilter dtoSystemPropertyFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoSystemPropertyFilter.idCriteria, dtoSystemPropertyFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoSystemPropertyFilter.valueCriteria, dtoSystemPropertyFilter.valueOperator);
    query = query + SqlFilterBuilder.getFilterQuery("value ", dtoSystemPropertyFilter.nameCriteria, dtoSystemPropertyFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoSystemPropertyFilter.createdByCriteria, dtoSystemPropertyFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoSystemPropertyFilter.updatedByCriteria, dtoSystemPropertyFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoSystemPropertyFilter.creationDateCriteria, dtoSystemPropertyFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoSystemPropertyFilter.updateDateCriteria, dtoSystemPropertyFilter.updateDateOperator);
    return query;
  }

}