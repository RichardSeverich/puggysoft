package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesHijoNotByPadreIdGetFilterSize {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursosMunicipales;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoAlcaldiaRecursosMunicipalesFilter dtoAlcaldiaRecursosMunicipalesFilter,
      Long pageSize, Long idPadre) {

    String query = SqlAlcaldiaRecursosMunicipalesFilterBuilderNative.build(dtoAlcaldiaRecursosMunicipalesFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryAlcaldiaRecursosMunicipales.findSizeAlcaldiaRecursosMunicipalesHijoNotByPadreId(idPadre);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT DISTINCT COUNT(*) FROM alcaldia_recursos_municipales "
      + "WHERE alcaldia_recursos_municipales.tipo = \"HIJO\" AND "
      + "alcaldia_recursos_municipales.id NOT IN (SELECT alcaldia_recursos_municipales.id FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_grupo_para_reportes ON alcaldia_recursos_municipales.id = alcaldia_recursos_municipales_grupo_para_reportes.id_recurso_municipal_hijo "
      + "WHERE alcaldia_recursos_municipales_grupo_para_reportes.id_recurso_municipal_padre = " + idPadre + ") AND alcaldia_recursos_municipales.id " 
      + "NOT IN (SELECT id FROM alcaldia_recursos_municipales WHERE name = (SELECT alcaldia_recursos_municipales.name FROM alcaldia_recursos_municipales INNER JOIN alcaldia_recursos_municipales_grupo_para_reportes "
      + "ON alcaldia_recursos_municipales_grupo_para_reportes.id_recurso_municipal_hijo = alcaldia_recursos_municipales.id "
      + "WHERE alcaldia_recursos_municipales_grupo_para_reportes.id_recurso_municipal_padre = " + idPadre + " AND alcaldia_recursos_municipales_grupo_para_reportes.id_recurso_municipal_hijo = "
      + "(SELECT id FROM `alcaldia_recursos_municipales` WHERE name LIKE \"%TIMBRES%\" LIMIT 1))) AND "
      + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
