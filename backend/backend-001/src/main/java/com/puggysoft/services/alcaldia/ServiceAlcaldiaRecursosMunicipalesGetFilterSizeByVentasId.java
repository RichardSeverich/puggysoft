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

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesGetFilterSizeByVentasId {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursosMunicipales;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<Long> getSize(Long ventasId, DtoAlcaldiaRecursosMunicipalesFilter dtoProductFilter, Long pageSize) {

    String query = SqlAlcaldiaRecursosMunicipalesFilterBuilderNative.build(dtoProductFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryAlcaldiaRecursosMunicipales.findSizeAlcaldiaRecursosMunicipalesBelongToventas(ventasId);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) "
          + "FROM alcaldia_recursos_municipales "
          + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
          + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
          + "WHERE alcaldia_recursos_municipales_venta.id = " + ventasId + " AND " + query;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}

