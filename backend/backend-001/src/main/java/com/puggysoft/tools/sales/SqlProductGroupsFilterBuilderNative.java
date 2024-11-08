package com.puggysoft.tools.sales;

import com.puggysoft.dtos.sales.DtoProductGroupsFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlProductGroupsFilterBuilderNative {

  /** Constructor. */
  private SqlProductGroupsFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoProductGroupsFilter dtoGroupProductsFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("product_groups.id", dtoGroupProductsFilter.idCriteria,
        dtoGroupProductsFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("product_groups.name", dtoGroupProductsFilter.nameCriteria,
        dtoGroupProductsFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("product_groups.tenant ", dtoGroupProductsFilter.tenantCriteria,
        dtoGroupProductsFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("product_groups.created_by", dtoGroupProductsFilter.createdByCriteria,
        dtoGroupProductsFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("product_groups.updated_by", dtoGroupProductsFilter.updatedByCriteria,
        dtoGroupProductsFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("product_groups.creation_date", dtoGroupProductsFilter.creationDateCriteria,
        dtoGroupProductsFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("product_groups.update_date", dtoGroupProductsFilter.updateDateCriteria,
        dtoGroupProductsFilter.updateDateOperator);
    return query;
  }

}
