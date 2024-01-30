package com.puggysoft.tools.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCalificacionesFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlEscuelaCalificacionesFilterBuilderNative {

  /** Constructor. */
  private SqlEscuelaCalificacionesFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoEscuelaCalificacionesFilter dtoEscuelaCalificacionesFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoEscuelaCalificacionesFilter.idCriteria,
        dtoEscuelaCalificacionesFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("curso", dtoEscuelaCalificacionesFilter.cursoCriteria,
        dtoEscuelaCalificacionesFilter.cursoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("materia", dtoEscuelaCalificacionesFilter.materiaCriteria,
        dtoEscuelaCalificacionesFilter.materiaOperator);
    query = query + SqlFilterBuilder.getFilterQuery("estudiante", dtoEscuelaCalificacionesFilter.estudianteCriteria,
        dtoEscuelaCalificacionesFilter.estudianteOperator);
    query = query + SqlFilterBuilder.getFilterQuery("nota", dtoEscuelaCalificacionesFilter.notaCriteria,
        dtoEscuelaCalificacionesFilter.notaOperator);
    query = query + SqlFilterBuilder.getFilterQuery("nota_valor", dtoEscuelaCalificacionesFilter.notaValorCriteria,
        dtoEscuelaCalificacionesFilter.notaValorOperator);
    query = query + SqlFilterBuilder.getFilterQuery("tenant ", dtoEscuelaCalificacionesFilter.tenantCriteria,
        dtoEscuelaCalificacionesFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoEscuelaCalificacionesFilter.createdByCriteria,
        dtoEscuelaCalificacionesFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoEscuelaCalificacionesFilter.updatedByCriteria,
        dtoEscuelaCalificacionesFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("creation_date", dtoEscuelaCalificacionesFilter.creationDateCriteria,
            dtoEscuelaCalificacionesFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoEscuelaCalificacionesFilter.updateDateCriteria,
        dtoEscuelaCalificacionesFilter.updateDateOperator);
    return query;
  }

}
