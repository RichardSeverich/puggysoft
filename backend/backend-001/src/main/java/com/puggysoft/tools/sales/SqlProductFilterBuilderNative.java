package com.puggysoft.tools.sales;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.tools.SqlFilterBuilder;


/** Tool class.*/
public final class SqlProductFilterBuilderNative {

  /** Constructor.*/
  private SqlProductFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoProductFilter dtoProductFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoProductFilter.idCriteria, dtoProductFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoProductFilter.nameCriteria, dtoProductFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("purchase_price ", dtoProductFilter.purchasePriceCriteria, dtoProductFilter.purchasePriceOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sale_price", dtoProductFilter.salePriceCriteria, dtoProductFilter.salePriceOperator);
    query = query + SqlFilterBuilder.getFilterQuery("stock", dtoProductFilter.stockCriteria, dtoProductFilter.stockOperator);
    query = query + SqlFilterBuilder.getFilterQuery("description ", dtoProductFilter.descriptionCriteria, dtoProductFilter.descriptionOperator);
    query = query + SqlFilterBuilder.getFilterQuery("bar_code ", dtoProductFilter.barCodeCriteria, dtoProductFilter.barCodeOperator);
    query = query + SqlFilterBuilder.getFilterQuery("location ", dtoProductFilter.locationCriteria, dtoProductFilter.locationOperator);
    query = query + SqlFilterBuilder.getFilterQuery("minimum_stock ", dtoProductFilter.minimumStockCriteria, dtoProductFilter.minimumStockOperator);
    query = query + SqlFilterBuilder.getFilterQuery("code", dtoProductFilter.codeCriteria, dtoProductFilter.codeOperator);
    query = query + SqlFilterBuilder.getFilterQuery("products.tenant", dtoProductFilter.tenantCriteria, dtoProductFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoProductFilter.createdByCriteria, dtoProductFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoProductFilter.updatedByCriteria, dtoProductFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoProductFilter.creationDateCriteria, dtoProductFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoProductFilter.updateDateCriteria, dtoProductFilter.updateDateOperator);
    return query;
  }

}