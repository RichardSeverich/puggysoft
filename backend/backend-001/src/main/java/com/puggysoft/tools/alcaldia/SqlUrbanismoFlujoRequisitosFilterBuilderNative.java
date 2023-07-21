package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitosFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlUrbanismoFlujoRequisitosFilterBuilderNative {

  /** Constructor. */
  private SqlUrbanismoFlujoRequisitosFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoUrbanismoFlujoRequisitosFilter dtoUrbanismoFlujoRequisitosFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.id",
        dtoUrbanismoFlujoRequisitosFilter.idCriteria,
        dtoUrbanismoFlujoRequisitosFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.id_tramite_flujo",
        dtoUrbanismoFlujoRequisitosFilter.idTramiteFlujoCriteria,
        dtoUrbanismoFlujoRequisitosFilter.idTramiteFlujoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.requisito_nombre_corto",
        dtoUrbanismoFlujoRequisitosFilter.requisitoNombreCortoCriteria,
        dtoUrbanismoFlujoRequisitosFilter.requisitoNombreCortoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.estado",
        dtoUrbanismoFlujoRequisitosFilter.estadoCriteria,
        dtoUrbanismoFlujoRequisitosFilter.estadoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.archivo_requisito",
        dtoUrbanismoFlujoRequisitosFilter.archivoRequisitoCriteria,
        dtoUrbanismoFlujoRequisitosFilter.archivoRequisitoOperator);    
    query = query + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.tenant ",
        dtoUrbanismoFlujoRequisitosFilter.tenantCriteria,
        dtoUrbanismoFlujoRequisitosFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.created_by",
            dtoUrbanismoFlujoRequisitosFilter.createdByCriteria,
            dtoUrbanismoFlujoRequisitosFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.updated_by",
            dtoUrbanismoFlujoRequisitosFilter.updatedByCriteria,
            dtoUrbanismoFlujoRequisitosFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.creation_date",
            dtoUrbanismoFlujoRequisitosFilter.creationDateCriteria,
            dtoUrbanismoFlujoRequisitosFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alc_urb_tramite_flujo_requisitos.update_date",
            dtoUrbanismoFlujoRequisitosFilter.updateDateCriteria,
            dtoUrbanismoFlujoRequisitosFilter.updateDateOperator);
    return query;
  }

}
