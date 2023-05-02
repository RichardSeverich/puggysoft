package com.puggysoft.tools.sales;

import com.puggysoft.dtos.sales.DtoSaleFilter;
import com.puggysoft.tools.SqlFilterBuilder;


/** Tool class.*/
public final class SqlSaleFilterBuilderNative {

  /** Constructor.*/
  private SqlSaleFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoSaleFilter dtoSaleFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoSaleFilter.idCriteria, dtoSaleFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("client", dtoSaleFilter.clientCriteria, dtoSaleFilter.clientOperator);
    query = query + SqlFilterBuilder.getFilterQuery("status ", dtoSaleFilter.statusCriteria, dtoSaleFilter.statusOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.tenant", dtoSaleFilter.tenantCriteria, dtoSaleFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoSaleFilter.createdByCriteria, dtoSaleFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoSaleFilter.updatedByCriteria, dtoSaleFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoSaleFilter.creationDateCriteria, dtoSaleFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoSaleFilter.updateDateCriteria, dtoSaleFilter.updateDateOperator);
    return query;
  }

}