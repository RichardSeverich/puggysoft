package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoEstadosFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoEstados;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlUrbanismoEstadosFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceEstadosGetFilterWithTramitesSize {

  @Autowired
  private IRepositoryUrbanismoEstados repositoryEstados;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoUrbanismoEstadosFilter dtoUrbanismoEstadosFilter, Long pageSize, String tramite) {

    String query = SqlUrbanismoEstadosFilterBuilderNative.build(dtoUrbanismoEstadosFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryEstados.findSizeWithTramites(tramite);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM alc_urb_estados "
          + "INNER JOIN alc_urb_tramite_flujo ON "
          + "alc_urb_tramite_flujo.estado_nombre_corto=alc_urb_estados.nombre_corto "
          + "WHERE alc_urb_tramite_flujo.tramite_nombre_corto = '" + tramite + "' AND " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}