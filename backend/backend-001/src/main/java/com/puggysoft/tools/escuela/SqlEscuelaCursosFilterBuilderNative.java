package com.puggysoft.tools.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlEscuelaCursosFilterBuilderNative {

  /** Constructor. */
  private SqlEscuelaCursosFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoEscuelaCursosFilter dtoEscuelaCursosFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoEscuelaCursosFilter.idCriteria,
        dtoEscuelaCursosFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoEscuelaCursosFilter.nameCriteria,
        dtoEscuelaCursosFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("short_name", dtoEscuelaCursosFilter.shortNameCriteria,
        dtoEscuelaCursosFilter.shortNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("gestion", dtoEscuelaCursosFilter.gestionCriteria,
        dtoEscuelaCursosFilter.gestionOperator);
    query = query + SqlFilterBuilder.getFilterQuery("tenant ", dtoEscuelaCursosFilter.tenantCriteria,
        dtoEscuelaCursosFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoEscuelaCursosFilter.createdByCriteria,
        dtoEscuelaCursosFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoEscuelaCursosFilter.updatedByCriteria,
        dtoEscuelaCursosFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoEscuelaCursosFilter.creationDateCriteria,
        dtoEscuelaCursosFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoEscuelaCursosFilter.updateDateCriteria,
        dtoEscuelaCursosFilter.updateDateOperator);
    return query;
  }

}
