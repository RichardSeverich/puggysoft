package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.dtos.users.DtoRoleFilter;
import com.puggysoft.entities.users.EntityRole;
import com.puggysoft.repositories.users.IRepositoryRole;
import com.puggysoft.tools.users.SqlRoleFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for filter roles. */
@Service
public class ServiceRoleGetFilter {

  @Autowired
  private IRepositoryRole repositoryRole;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter roles. */
  public ResponseEntity<List<DtoRole>> filter(DtoRoleFilter dtoRoleFilter, int page, int size) {

    String query = SqlRoleFilterBuilderNative.build(dtoRoleFilter);
    int off = page * size;
    List<EntityRole> listEntities;
    if (query.equals("")) {
      listEntities = repositoryRole.findRolesByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT roles.* FROM roles WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityRole.class);
      listEntities = (List<EntityRole>) filterQuery.getResultList();
    }
    List<DtoRole> listDtoRole = listEntities
        .stream()
        .map(DtoRole::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoRole);
  }

}
