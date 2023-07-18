package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotesFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryRegulaLotes;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlRegulaLotesFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceRegulaLotesGetFilterSize {

  @Autowired
  private IRepositoryRegulaLotes repositoryRegulaLotes;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoRegulaLotesFilter dtoRegulaLotesFilter,
      Long pageSize) {

    String query = SqlRegulaLotesFilterBuilderNative.build(dtoRegulaLotesFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryRegulaLotes.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM alc_reg_lotes WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
