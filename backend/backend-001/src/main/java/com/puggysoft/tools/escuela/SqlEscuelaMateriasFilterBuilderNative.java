package com.puggysoft.tools.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaMateriasFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlEscuelaMateriasFilterBuilderNative {

  /** Constructor. */
  private SqlEscuelaMateriasFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoEscuelaMateriasFilter dtoEscuelaMateriasFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoEscuelaMateriasFilter.idCriteria,
        dtoEscuelaMateriasFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoEscuelaMateriasFilter.nameCriteria,
        dtoEscuelaMateriasFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("short_name", dtoEscuelaMateriasFilter.shortNameCriteria,
        dtoEscuelaMateriasFilter.shortNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("nota_maxima", dtoEscuelaMateriasFilter.notaMaximaCriteria,
        dtoEscuelaMateriasFilter.notaMaximaOperator);
    query = query + SqlFilterBuilder.getFilterQuery("tenant ", dtoEscuelaMateriasFilter.tenantCriteria,
        dtoEscuelaMateriasFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoEscuelaMateriasFilter.createdByCriteria,
        dtoEscuelaMateriasFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoEscuelaMateriasFilter.updatedByCriteria,
        dtoEscuelaMateriasFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoEscuelaMateriasFilter.creationDateCriteria,
        dtoEscuelaMateriasFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoEscuelaMateriasFilter.updateDateCriteria,
        dtoEscuelaMateriasFilter.updateDateOperator);
    return query;
  }

}
