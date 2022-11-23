package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoSystemPropertyFilter;
import com.puggysoft.repositories.system.IRepositorySystemProperty;
import com.puggysoft.tools.TotalPagesCalculator;
import com.puggysoft.tools.system.SqlSystemPropertyFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceSystemPropertyGetFilterSize {

  @Autowired
  private IRepositorySystemProperty repositorySystemProperty;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoSystemPropertyFilter dtoSystemPropertyFilter, Long pageSize) {

    String query = SqlSystemPropertyFilterBuilderNative.build(dtoSystemPropertyFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositorySystemProperty.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM system_properties WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}