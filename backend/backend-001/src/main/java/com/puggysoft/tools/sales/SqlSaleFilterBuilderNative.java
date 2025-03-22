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
    query = query + SqlFilterBuilder.getFilterQuery("sales.client", dtoSaleFilter.clientCriteria, dtoSaleFilter.clientOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.status ", dtoSaleFilter.statusCriteria, dtoSaleFilter.statusOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.aux ", dtoSaleFilter.auxCriteria, dtoSaleFilter.auxOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.tenant", dtoSaleFilter.tenantCriteria, dtoSaleFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.total_price", dtoSaleFilter.totalPriceCriteria, dtoSaleFilter.totalPriceOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.customer_cash", dtoSaleFilter.customerCashCriteria, dtoSaleFilter.customerCashOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.customer_cash_change", dtoSaleFilter.customerCashChangeCriteria, dtoSaleFilter.customerCashChangeOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.created_by", dtoSaleFilter.createdByCriteria, dtoSaleFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.updated_by", dtoSaleFilter.updatedByCriteria, dtoSaleFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.creation_date", dtoSaleFilter.creationDateCriteria, dtoSaleFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sales.update_date", dtoSaleFilter.updateDateCriteria, dtoSaleFilter.updateDateOperator);
    return query;
  }

}