package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoHistorialFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlUrbanismoHistorialFilterBuilderNative {

  /** Constructor. */
  private SqlUrbanismoHistorialFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoUrbanismoHistorialFilter dtoUrbanismoHistorialFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_historial.id",
        dtoUrbanismoHistorialFilter.idCriteria,
        dtoUrbanismoHistorialFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_historial.id_tramite_flujo",
        dtoUrbanismoHistorialFilter.idTramiteFlujoCriteria,
        dtoUrbanismoHistorialFilter.idTramiteFlujoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_historial.username",
        dtoUrbanismoHistorialFilter.usernameCriteria,
        dtoUrbanismoHistorialFilter.usernameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_historial.estado_anterior",
        dtoUrbanismoHistorialFilter.estadoAnteriorCriteria,
        dtoUrbanismoHistorialFilter.estadoAnteriorOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_historial.estado_nuevo",
        dtoUrbanismoHistorialFilter.estadoNuevoCriteria,
        dtoUrbanismoHistorialFilter.estadoNuevoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_historial.tenant ",
        dtoUrbanismoHistorialFilter.tenantCriteria,
        dtoUrbanismoHistorialFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_historial.created_by",
            dtoUrbanismoHistorialFilter.createdByCriteria,
            dtoUrbanismoHistorialFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_historial.updated_by",
            dtoUrbanismoHistorialFilter.updatedByCriteria,
            dtoUrbanismoHistorialFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_historial.creation_date",
            dtoUrbanismoHistorialFilter.creationDateCriteria,
            dtoUrbanismoHistorialFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_historial.update_date",
            dtoUrbanismoHistorialFilter.updateDateCriteria,
            dtoUrbanismoHistorialFilter.updateDateOperator);
    return query;
  }

}
