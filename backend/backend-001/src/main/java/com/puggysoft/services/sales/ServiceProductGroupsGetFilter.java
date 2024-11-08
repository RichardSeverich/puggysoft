package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProductGroups;
import com.puggysoft.dtos.sales.DtoProductGroupsFilter;
import com.puggysoft.entities.sales.EntityProductGroups;
import com.puggysoft.repositories.sales.IRepositoryProductGroups;
import com.puggysoft.tools.sales.SqlProductGroupsFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for filter. */
@Service
public class ServiceProductGroupsGetFilter {

  @Autowired
  private IRepositoryProductGroups repositoryGroupProduct;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoProductGroups>> filter(DtoProductGroupsFilter dtoGroupProductFilter, int page, int size) {

    String query = SqlProductGroupsFilterBuilderNative.build(dtoGroupProductFilter);
    int off = page * size;
    List<EntityProductGroups> listEntities;
    if (query.equals("")) {
      listEntities = repositoryGroupProduct.findProductGroupsByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT product_groups.* FROM product_groups WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityProductGroups.class);
      listEntities = (List<EntityProductGroups>) filterQuery.getResultList();
    }
    List<DtoProductGroups> listDtoGroupProduct = listEntities
        .stream()
        .map(DtoProductGroups::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoGroupProduct);
  }

}
