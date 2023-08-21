package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesVentaFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilterSize {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVenta repositoryAlcaldiaRecursosMunicipalesVenta;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(
      DtoAlcaldiaRecursosMunicipalesVentaFilter dtoAlcaldiaRecursosMunicipalesVentaFilter, Long pageSize) {

    String query = SqlAlcaldiaRecursosMunicipalesVentaFilterBuilderNative
        .build(dtoAlcaldiaRecursosMunicipalesVentaFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryAlcaldiaRecursosMunicipalesVenta.findSizeTimbres();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(DISTINCT alcaldia_recursos_municipales_venta.id) FROM alcaldia_recursos_municipales_venta " 
        + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
        + "INNER JOIN alcaldia_recursos_municipales ON alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal=alcaldia_recursos_municipales.id "
        + "WHERE alcaldia_recursos_municipales.name NOT LIKE \"%TIMBRES%\" AND "
        + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
