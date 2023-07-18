package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.dtos.alcaldia.DtoRegulaLotesFilter;
import com.puggysoft.entities.alcaldia.EntityRegulaLotes;
import com.puggysoft.repositories.alcaldia.IRepositoryRegulaLotes;
import com.puggysoft.tools.alcaldia.SqlRegulaLotesFilterBuilderNative;
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
public class ServiceRegulaLotesGetFilter {

  @Autowired
  private IRepositoryRegulaLotes repositoryRegulaLotes;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoRegulaLotes>> filter(
      DtoRegulaLotesFilter dtoRegulaLotesFilter, int page, int size) {

    String query = SqlRegulaLotesFilterBuilderNative.build(dtoRegulaLotesFilter);
    int off = page * size;
    List<EntityRegulaLotes> listEntities;
    if (query.equals("")) {
      listEntities = repositoryRegulaLotes.findRegulaLotesByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alc_reg_lotes.* FROM alc_reg_lotes WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityRegulaLotes.class);
      listEntities = (List<EntityRegulaLotes>) filterQuery.getResultList();
    }
    List<DtoRegulaLotes> listDtoRegulaLotes = listEntities
        .stream()
        .map(DtoRegulaLotes::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoRegulaLotes);
  }

}