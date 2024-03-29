package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.entities.users.EntityUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import com.puggysoft.tools.users.SqlUserFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for filter users. */
@Service
public class ServiceUserGetFilterWithoutTenants {

  @Autowired
  private IRepositoryUser repositoryUser;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter users. */
  public ResponseEntity<List<DtoUser>> filter(DtoUserFilter dtoUserFilter, int page, int size, String tenant) {

    String query = SqlUserFilterBuilderNative.build(dtoUserFilter);
    int off = page * size;
    List<EntityUser> listEntities;
    if (query.equals("")) {
      listEntities = repositoryUser.findUsersWithoutTenantsPagination(tenant, off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT users.* FROM users WHERE "
          + "users.username NOT IN ( SELECT tenants_users.username FROM tenants_users WHERE tenants_users.tenant = '"
          + tenant + "') AND " + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityUser.class);
      listEntities = (List<EntityUser>) filterQuery.getResultList();
    }
    List<DtoUser> listDtoUser = listEntities
        .stream()
        .map(DtoUser::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUser);
  }

}
