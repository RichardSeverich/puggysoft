package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.repositories.users.IRepositoryUser;
import com.puggysoft.tools.users.SqlUserFilterBuilder;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceUserFilterSize {

  @Autowired
  private IRepositoryUser repositoryUser;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoUserFilter dtoUserFilter, Long pageSize) {

    String query = SqlUserFilterBuilder.build(dtoUserFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryUser.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(u) FROM EntityUser u WHERE " + query;
      Query filterQuery = entityManager.createQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = totalRows / pageSize;
    if (totalRows % pageSize != 0) {
      totalPages = totalPages + 1L;
    }
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}