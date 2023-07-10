package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteFlujoFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlUrbanismoTramiteFlujoFilterBuilderNative {

  /** Constructor. */
  private SqlUrbanismoTramiteFlujoFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoUrbanismoTramiteFlujoFilter dtoUrbanismoTramiteFlujoFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.id",
        dtoUrbanismoTramiteFlujoFilter.idCriteria,
        dtoUrbanismoTramiteFlujoFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.tramite_nombre_corto",
        dtoUrbanismoTramiteFlujoFilter.tramiteNombreCortoCriteria,
        dtoUrbanismoTramiteFlujoFilter.tramiteNombreCortoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.estado_nombre_corto",
        dtoUrbanismoTramiteFlujoFilter.estadoNombreCortoCriteria,
        dtoUrbanismoTramiteFlujoFilter.estadoNombreCortoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.nombre_cliente",
        dtoUrbanismoTramiteFlujoFilter.nombreClienteCriteria,
        dtoUrbanismoTramiteFlujoFilter.nombreClienteOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.ci_cliente",
        dtoUrbanismoTramiteFlujoFilter.ciClienteCriteria,
        dtoUrbanismoTramiteFlujoFilter.ciClienteOperator);    
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.tenant ",
        dtoUrbanismoTramiteFlujoFilter.tenantCriteria,
        dtoUrbanismoTramiteFlujoFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.created_by",
            dtoUrbanismoTramiteFlujoFilter.createdByCriteria,
            dtoUrbanismoTramiteFlujoFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.updated_by",
            dtoUrbanismoTramiteFlujoFilter.updatedByCriteria,
            dtoUrbanismoTramiteFlujoFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.creation_date",
            dtoUrbanismoTramiteFlujoFilter.creationDateCriteria,
            dtoUrbanismoTramiteFlujoFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo.update_date",
            dtoUrbanismoTramiteFlujoFilter.updateDateCriteria,
            dtoUrbanismoTramiteFlujoFilter.updateDateOperator);
    return query;
  }

}
