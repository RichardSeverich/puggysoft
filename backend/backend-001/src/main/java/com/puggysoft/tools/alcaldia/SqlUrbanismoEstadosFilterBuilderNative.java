package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoEstadosFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlUrbanismoEstadosFilterBuilderNative {

  /** Constructor. */
  private SqlUrbanismoEstadosFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoUrbanismoEstadosFilter dtoUrbanismoEstadosFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_estados.id",
        dtoUrbanismoEstadosFilter.idCriteria,
        dtoUrbanismoEstadosFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_estados.nombre",
        dtoUrbanismoEstadosFilter.nombreCriteria,
        dtoUrbanismoEstadosFilter.nombreOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_estados.nombre_corto",
        dtoUrbanismoEstadosFilter.nombreCortoCriteria,
        dtoUrbanismoEstadosFilter.nombreCortoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_estados.tenant ",
        dtoUrbanismoEstadosFilter.tenantCriteria,
        dtoUrbanismoEstadosFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_estados.created_by",
            dtoUrbanismoEstadosFilter.createdByCriteria,
            dtoUrbanismoEstadosFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_estados.updated_by",
            dtoUrbanismoEstadosFilter.updatedByCriteria,
            dtoUrbanismoEstadosFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_estados.creation_date",
            dtoUrbanismoEstadosFilter.creationDateCriteria,
            dtoUrbanismoEstadosFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_estados.update_date",
            dtoUrbanismoEstadosFilter.updateDateCriteria,
            dtoUrbanismoEstadosFilter.updateDateOperator);
    return query;
  }

}
