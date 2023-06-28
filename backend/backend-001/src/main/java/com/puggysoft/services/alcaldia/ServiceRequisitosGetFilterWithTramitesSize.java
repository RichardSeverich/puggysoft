package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoRequisitosFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoRequisitos;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlUrbanismoRequisitosFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceRequisitosGetFilterWithTramitesSize {

  @Autowired
  private IRepositoryUrbanismoRequisitos repositoryRequisitos;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoUrbanismoRequisitosFilter dtoUrbanismoRequisitosFilter, Long pageSize, String tramite) {

    String query = SqlUrbanismoRequisitosFilterBuilderNative.build(dtoUrbanismoRequisitosFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryRequisitos.findSizeWithTramites(tramite);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM alc_urb_requisitos "
          + "INNER JOIN alc_urb_tramite_requisitos ON "
          + "alc_urb_tramite_requisitos.requisito_nombre_corto=alc_urb_requisitos.nombre_corto "
          + "WHERE alc_urb_tramite_requisitos.tramite_nombre_corto = '" + tramite + "' AND " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}