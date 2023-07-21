package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoHistorialFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoHistorial;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlUrbanismoHistorialFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceUrbanismoHistorialGetFilterSize {

  @Autowired
  private IRepositoryUrbanismoHistorial repositoryUrbanismoHistorial;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoUrbanismoHistorialFilter dtoUrbanismoHistorialFilter,
      Long pageSize) {

    String query = SqlUrbanismoHistorialFilterBuilderNative.build(dtoUrbanismoHistorialFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryUrbanismoHistorial.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM alc_urb_historial WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
