package com.puggysoft.tools.facturacion;

import com.puggysoft.dtos.facturacion.DtoBillFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlBillFilterBuilderNative {

  /** Constructor. */
  private SqlBillFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoBillFilter dtoBillFilter) {
    String query = "";
    query = query
        + SqlFilterBuilder.getFilterQuery("number_authorization",
            dtoBillFilter.numberAuthorizationCriteria,
            dtoBillFilter.numberAuthorizationOperator);
    query = query + SqlFilterBuilder.getFilterQuery("bill_number", dtoBillFilter.billNumberCriteria,
        dtoBillFilter.billNumberOperator);
    query = query + SqlFilterBuilder.getFilterQuery("nit_client ", dtoBillFilter.nitClientCriteria,
        dtoBillFilter.nitClientOperator);
    query = query + SqlFilterBuilder.getFilterQuery("date_purchased", dtoBillFilter.datePurchasedCriteria,
        dtoBillFilter.datePurchasedOperator);
    query = query + SqlFilterBuilder.getFilterQuery("dosage_key", dtoBillFilter.dosageKeyCriteria,
        dtoBillFilter.dosageKeyOperator);
    query = query + SqlFilterBuilder.getFilterQuery("control_code ", dtoBillFilter.controlCodeCriteria,
        dtoBillFilter.controlCodeOperator);
    query = query + SqlFilterBuilder.getFilterQuery("purchase_amount ",
        dtoBillFilter.purchaseAmountCriteria,
        dtoBillFilter.purchaseAmountOperator);
    query = query + SqlFilterBuilder.getFilterQuery("tenant ", dtoBillFilter.tenantCriteria,
        dtoBillFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoBillFilter.createdByCriteria,
        dtoBillFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoBillFilter.updatedByCriteria,
        dtoBillFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoBillFilter.creationDateCriteria,
        dtoBillFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoBillFilter.updateDateCriteria,
        dtoBillFilter.updateDateOperator);
    return query;
  }

}