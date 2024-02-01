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
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.id", dtoEscuelaCursosFilter.idCriteria,
        dtoEscuelaCursosFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.name", dtoEscuelaCursosFilter.nameCriteria,
        dtoEscuelaCursosFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.short_name", dtoEscuelaCursosFilter.shortNameCriteria,
        dtoEscuelaCursosFilter.shortNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.gestion", dtoEscuelaCursosFilter.gestionCriteria,
        dtoEscuelaCursosFilter.gestionOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.tenant ", dtoEscuelaCursosFilter.tenantCriteria,
        dtoEscuelaCursosFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.created_by", dtoEscuelaCursosFilter.createdByCriteria,
        dtoEscuelaCursosFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.updated_by", dtoEscuelaCursosFilter.updatedByCriteria,
        dtoEscuelaCursosFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.creation_date", dtoEscuelaCursosFilter.creationDateCriteria,
        dtoEscuelaCursosFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("escuela_cursos.update_date", dtoEscuelaCursosFilter.updateDateCriteria,
        dtoEscuelaCursosFilter.updateDateOperator);
    return query;
  }

}
