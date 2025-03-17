package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaStep;
import com.puggysoft.dtos.qa.DtoQaStepFilter;
import com.puggysoft.entities.qa.EntityQaStep;
import com.puggysoft.repositories.qa.IRepositoryQaStep;
import com.puggysoft.tools.qa.SqlQaStepFilterBuilderNative;

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
public class ServiceQaStepGetFilter {

  @Autowired
  private IRepositoryQaStep repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoQaStep>> filter(DtoQaStepFilter dtoFilter, int page, int size) {

    String query = SqlQaStepFilterBuilderNative.build(dtoFilter);
    int off = page * size;
    List<EntityQaStep> listEntities;
    if (query.equals("")) {
      listEntities = repository.findQaStepByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT qa_steps.* FROM qa_steps WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityQaStep.class);
      listEntities = (List<EntityQaStep>) filterQuery.getResultList();
    }
    List<DtoQaStep> listDtos = listEntities
        .stream()
        .map(DtoQaStep::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }

}