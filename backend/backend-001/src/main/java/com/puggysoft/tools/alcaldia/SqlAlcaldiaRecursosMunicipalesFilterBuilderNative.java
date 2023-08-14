package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlAlcaldiaRecursosMunicipalesFilterBuilderNative {

  /** Constructor. */
  private SqlAlcaldiaRecursosMunicipalesFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoAlcaldiaRecursosMunicipalesFilter dtoAlcaldiaRecursosMunicipalesFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.id",
        dtoAlcaldiaRecursosMunicipalesFilter.idCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.codigo",
        dtoAlcaldiaRecursosMunicipalesFilter.codigoCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.codigoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.codigo_auxiliar",
        dtoAlcaldiaRecursosMunicipalesFilter.codigoAuxiliarCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.codigoAuxiliarOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.talonario_movimiento",
        dtoAlcaldiaRecursosMunicipalesFilter.talonarioMovimientoCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.talonarioMovimientoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.talonario_inicio",
        dtoAlcaldiaRecursosMunicipalesFilter.talonarioInicioCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.talonarioInicioOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.talonario_final",
        dtoAlcaldiaRecursosMunicipalesFilter.talonarioFinalCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.talonarioFinalOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.tipo",
        dtoAlcaldiaRecursosMunicipalesFilter.tipoCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.tipoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.name",
        dtoAlcaldiaRecursosMunicipalesFilter.nameCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.precio",
        dtoAlcaldiaRecursosMunicipalesFilter.precioCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.precioOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.tenant ",
        dtoAlcaldiaRecursosMunicipalesFilter.tenantCriteria,
        dtoAlcaldiaRecursosMunicipalesFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.created_by",
            dtoAlcaldiaRecursosMunicipalesFilter.createdByCriteria,
            dtoAlcaldiaRecursosMunicipalesFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.updated_by",
            dtoAlcaldiaRecursosMunicipalesFilter.updatedByCriteria,
            dtoAlcaldiaRecursosMunicipalesFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.creation_date",
            dtoAlcaldiaRecursosMunicipalesFilter.creationDateCriteria,
            dtoAlcaldiaRecursosMunicipalesFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_recursos_municipales.update_date",
            dtoAlcaldiaRecursosMunicipalesFilter.updateDateCriteria,
            dtoAlcaldiaRecursosMunicipalesFilter.updateDateOperator);
    return query;
  }

}
