package com.puggysoft.tools.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaNotasFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlEscuelaNotasFilterBuilderNative {

  /** Constructor. */
  private SqlEscuelaNotasFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoEscuelaNotasFilter dtoEscuelaNotasFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.id", dtoEscuelaNotasFilter.idCriteria,
        dtoEscuelaNotasFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.name", dtoEscuelaNotasFilter.nameCriteria,
        dtoEscuelaNotasFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.short_name", dtoEscuelaNotasFilter.shortNameCriteria,
        dtoEscuelaNotasFilter.shortNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.porcentaje", dtoEscuelaNotasFilter.porcentajeCriteria,
        dtoEscuelaNotasFilter.porcentajeOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.tenant ", dtoEscuelaNotasFilter.tenantCriteria,
        dtoEscuelaNotasFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.created_by", dtoEscuelaNotasFilter.createdByCriteria,
        dtoEscuelaNotasFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.updated_by", dtoEscuelaNotasFilter.updatedByCriteria,
        dtoEscuelaNotasFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.creation_date", dtoEscuelaNotasFilter.creationDateCriteria,
        dtoEscuelaNotasFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_notas.update_date", dtoEscuelaNotasFilter.updateDateCriteria,
        dtoEscuelaNotasFilter.updateDateOperator);
    return query;
  }

}
