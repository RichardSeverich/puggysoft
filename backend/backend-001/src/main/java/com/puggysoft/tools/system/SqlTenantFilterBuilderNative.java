package com.puggysoft.tools.system;

import com.puggysoft.dtos.system.DtoTenantFilter;
import com.puggysoft.tools.SqlFilterBuilder;


/** Tool class.*/
public final class SqlTenantFilterBuilderNative {

  /** Constructor.*/
  private SqlTenantFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoTenantFilter dtoTenantFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoTenantFilter.idCriteria, dtoTenantFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoTenantFilter.nameCriteria, dtoTenantFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("short_name ", dtoTenantFilter.shortNameCriteria, dtoTenantFilter.shortNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("description ", dtoTenantFilter.descriptionCriteria, dtoTenantFilter.descriptionOperator);
    query = query + SqlFilterBuilder.getFilterQuery("telephone", dtoTenantFilter.telephoneCriteria, dtoTenantFilter.telephoneOperator);
    query = query + SqlFilterBuilder.getFilterQuery("address", dtoTenantFilter.addressCriteria, dtoTenantFilter.addressOperator);
    query = query + SqlFilterBuilder.getFilterQuery("image ", dtoTenantFilter.imageCriteria, dtoTenantFilter.imageOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoTenantFilter.createdByCriteria, dtoTenantFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoTenantFilter.updatedByCriteria, dtoTenantFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoTenantFilter.creationDateCriteria, dtoTenantFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoTenantFilter.updateDateCriteria, dtoTenantFilter.updateDateOperator);
    return query;
  }

}