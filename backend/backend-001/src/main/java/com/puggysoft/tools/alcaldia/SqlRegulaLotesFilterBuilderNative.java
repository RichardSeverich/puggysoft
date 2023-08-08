package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotesFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlRegulaLotesFilterBuilderNative {

  /** Constructor. */
  private SqlRegulaLotesFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoRegulaLotesFilter dtoRegulaLotesFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.id",
        dtoRegulaLotesFilter.idCriteria,
        dtoRegulaLotesFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.nombre_cliente",
        dtoRegulaLotesFilter.nombreClienteCriteria,
        dtoRegulaLotesFilter.nombreClienteOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.ci_cliente",
        dtoRegulaLotesFilter.ciClienteCriteria,
        dtoRegulaLotesFilter.ciClienteOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.numero_inmueble",
        dtoRegulaLotesFilter.numeroInmuebleCriteria,
        dtoRegulaLotesFilter.numeroInmuebleOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.comprobante_pago",
        dtoRegulaLotesFilter.comprobantePagoCriteria,
        dtoRegulaLotesFilter.comprobantePagoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.monto",
        dtoRegulaLotesFilter.montoCriteria,
        dtoRegulaLotesFilter.montoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.tenant ",
        dtoRegulaLotesFilter.tenantCriteria,
        dtoRegulaLotesFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.created_by",
            dtoRegulaLotesFilter.createdByCriteria,
            dtoRegulaLotesFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.updated_by",
            dtoRegulaLotesFilter.updatedByCriteria,
            dtoRegulaLotesFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.creation_date",
            dtoRegulaLotesFilter.creationDateCriteria,
            dtoRegulaLotesFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_reg_lotes.update_date",
            dtoRegulaLotesFilter.updateDateCriteria,
            dtoRegulaLotesFilter.updateDateOperator);
    return query;
  }

}
