package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTag;
import com.puggysoft.dtos.qa.DtoQaTagFilter;
import com.puggysoft.entities.qa.EntityQaTag;
import com.puggysoft.repositories.qa.IRepositoryQaTag;
import com.puggysoft.tools.qa.SqlQaTagFilterBuilderNative;

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
public class ServiceQaTagGetFilter {

  @Autowired
  private IRepositoryQaTag repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoQaTag>> filter(DtoQaTagFilter dtoFilter, int page, int size) {

    String query = SqlQaTagFilterBuilderNative.build(dtoFilter);
    int off = page * size;
    List<EntityQaTag> listEntities;
    if (query.equals("")) {
      listEntities = repository.findQaTagByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT qa_tags.* FROM qa_tags WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityQaTag.class);
      listEntities = (List<EntityQaTag>) filterQuery.getResultList();
    }
    List<DtoQaTag> listDtos = listEntities
        .stream()
        .map(DtoQaTag::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }

}