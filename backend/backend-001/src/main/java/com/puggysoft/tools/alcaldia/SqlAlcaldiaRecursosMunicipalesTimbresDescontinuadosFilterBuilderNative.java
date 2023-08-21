package com.puggysoft.tools.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilterBuilderNative {

  /** Constructor. */
  private SqlAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_timbres_descontinuados.id",
        dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.idCriteria,
        dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_timbres_descontinuados.codigo",
        dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.codigoCriteria,
        dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.codigoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("alcaldia_timbres_descontinuados.tenant ",
        dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.tenantCriteria,
        dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.tenantOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_timbres_descontinuados.created_by",
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.createdByCriteria,
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.createdByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_timbres_descontinuados.updated_by",
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.updatedByCriteria,
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.updatedByOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_timbres_descontinuados.creation_date",
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.creationDateCriteria,
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.creationDateOperator);
    query = query
        + SqlFilterBuilder.getFilterQuery("alcaldia_timbres_descontinuados.update_date",
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.updateDateCriteria,
            dtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter.updateDateOperator);
    return query;
  }

}
