package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitosFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlUrbanismoTramiteRequisitosFilterBuilderNative {

  /** Constructor. */
  private SqlUrbanismoTramiteRequisitosFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoUrbanismoTramiteRequisitosFilter dtoUrbanismoTramiteRequisitosFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.id",
        dtoUrbanismoTramiteRequisitosFilter.idCriteria,
        dtoUrbanismoTramiteRequisitosFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.tramite_nombre_corto",
        dtoUrbanismoTramiteRequisitosFilter.tramiteNombreCortoCriteria,
        dtoUrbanismoTramiteRequisitosFilter.tramiteNombreCortoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.estado_nombre_corto",
        dtoUrbanismoTramiteRequisitosFilter.requisitoNombreCortoCriteria,
        dtoUrbanismoTramiteRequisitosFilter.requisitoNombreCortoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.tenant ",
        dtoUrbanismoTramiteRequisitosFilter.tenantCriteria,
        dtoUrbanismoTramiteRequisitosFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.created_by",
            dtoUrbanismoTramiteRequisitosFilter.createdByCriteria,
            dtoUrbanismoTramiteRequisitosFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.updated_by",
            dtoUrbanismoTramiteRequisitosFilter.updatedByCriteria,
            dtoUrbanismoTramiteRequisitosFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.creation_date",
            dtoUrbanismoTramiteRequisitosFilter.creationDateCriteria,
            dtoUrbanismoTramiteRequisitosFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_requisitos.update_date",
            dtoUrbanismoTramiteRequisitosFilter.updateDateCriteria,
            dtoUrbanismoTramiteRequisitosFilter.updateDateOperator);
    return query;
  }

}
