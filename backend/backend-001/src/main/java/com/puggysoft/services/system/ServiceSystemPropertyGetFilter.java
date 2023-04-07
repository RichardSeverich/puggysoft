package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoSystemProperty;
import com.puggysoft.dtos.system.DtoSystemPropertyFilter;
import com.puggysoft.entities.system.EntitySystemProperty;
import com.puggysoft.repositories.system.IRepositorySystemProperty;
import com.puggysoft.tools.system.SqlSystemPropertyFilterBuilderNative;
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
public class ServiceSystemPropertyGetFilter {

  @Autowired
  private IRepositorySystemProperty repositorySystemProperty;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter roles. */
  public ResponseEntity<List<DtoSystemProperty>> filter(DtoSystemPropertyFilter dtoSystemPropertyFilter, int page, int size) {

    String query = SqlSystemPropertyFilterBuilderNative.build(dtoSystemPropertyFilter);
    int off = page * size;
    List<EntitySystemProperty> listEntities;
    if (query.equals("")) {
      listEntities = repositorySystemProperty.findSystemPropertiesByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT system_properties.* FROM system_properties WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntitySystemProperty.class);
      listEntities = (List<EntitySystemProperty>) filterQuery.getResultList();
    }
    List<DtoSystemProperty> listDtoSystemProperty = listEntities
        .stream()
        .map(DtoSystemProperty::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoSystemProperty);
  }

}
