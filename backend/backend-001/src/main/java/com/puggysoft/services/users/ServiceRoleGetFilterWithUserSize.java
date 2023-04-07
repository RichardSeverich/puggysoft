package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoRoleFilter;
import com.puggysoft.repositories.users.IRepositoryRole;
import com.puggysoft.tools.TotalPagesCalculator;
import com.puggysoft.tools.users.SqlRoleFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceRoleGetFilterWithUserSize {

  @Autowired
  private IRepositoryRole repositoryRole;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoRoleFilter dtoRoleFilter, Long pageSize, Long idUser) {

    String query = SqlRoleFilterBuilderNative.build(dtoRoleFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositoryRole.findSizeWithUsers(idUser);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM roles "
          + "INNER JOIN users_roles ON users_roles.id_role=roles.id "
          + "WHERE users_roles.id_user = " + idUser + " AND " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}