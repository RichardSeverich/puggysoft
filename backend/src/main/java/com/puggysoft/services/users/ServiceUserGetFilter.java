package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.entities.users.EntityUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import com.puggysoft.tools.users.SqlUserFilterBuilder;
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
public class ServiceUserGetFilter {

  @Autowired
  private IRepositoryUser repositoryUser;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter users. */
  public ResponseEntity<List<DtoUser>> filter(DtoUserFilter dtoUserFilter, int page, int size) {

    String query = SqlUserFilterBuilder.build(dtoUserFilter);
    int off = page * size;
    List<EntityUser> listEntities;
    if (query.equals("")) {
      listEntities = repositoryUser.findUsersByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT u FROM EntityUser u WHERE " + query;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createQuery(fullQuery);
      listEntities = filterQuery
          .setFirstResult(off)
          .setMaxResults(size)
          .getResultList();
    }
    List<DtoUser> listDtoUser = listEntities
        .stream()
        .map(DtoUser::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUser);
  }

}
