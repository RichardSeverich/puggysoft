package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitosFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoTramiteRequisitos;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlUrbanismoTramiteRequisitosFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceUrbanismoTramiteRequisitosGetFilterSize {

  @Autowired
  private IRepositoryUrbanismoTramiteRequisitos repositoryUrbanismoTramiteRequisitos;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoUrbanismoTramiteRequisitosFilter dtoUrbanismoTramiteRequisitosFilter,
      Long pageSize) {

    String query = SqlUrbanismoTramiteRequisitosFilterBuilderNative.build(dtoUrbanismoTramiteRequisitosFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryUrbanismoTramiteRequisitos.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM alc_urb_tramite_requisitos WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
