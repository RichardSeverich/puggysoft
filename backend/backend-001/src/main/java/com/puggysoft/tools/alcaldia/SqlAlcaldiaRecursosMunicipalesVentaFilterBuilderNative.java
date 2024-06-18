package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlAlcaldiaRecursosMunicipalesVentaFilterBuilderNative {

  /** Constructor. */
  private SqlAlcaldiaRecursosMunicipalesVentaFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoAlcaldiaRecursosMunicipalesVentaFilter dtoAlcaldiaRecursosMunicipalesVentaFilter) {
    String query = "";
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.id",
            dtoAlcaldiaRecursosMunicipalesVentaFilter.idCriteria,
            dtoAlcaldiaRecursosMunicipalesVentaFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.numero_comprobante",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.numeroComprobanteCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.numeroComprobanteOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.cliente_nombre",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteNombreCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteNombreOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.cliente_ci_nit",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteCiNitCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteCiNitOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.direccion",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.direccionCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.direccionOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.nota",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.notaCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.notaOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.venta_status",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.ventaStatusCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.ventaStatusOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.venta_precio_total",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.ventaPrecioTotalCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.ventaPrecioTotalOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.cliente_dinero",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteDineroCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteDineroOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.cliente_cambio",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteCambioCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.clienteCambioOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.glosa",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.glosaCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.glosaOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.tenant ",
            dtoAlcaldiaRecursosMunicipalesVentaFilter.tenantCriteria,
            dtoAlcaldiaRecursosMunicipalesVentaFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.created_by",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.createdByCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.updated_by",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.updatedByCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.creation_date",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.creationDateCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales_venta.update_date",
        dtoAlcaldiaRecursosMunicipalesVentaFilter.updateDateCriteria,
        dtoAlcaldiaRecursosMunicipalesVentaFilter.updateDateOperator);
    return query;
  }

}
