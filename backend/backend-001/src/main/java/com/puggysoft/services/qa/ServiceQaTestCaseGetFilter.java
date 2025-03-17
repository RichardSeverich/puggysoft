package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.entities.qa.EntityQaTestCase;
import com.puggysoft.repositories.qa.IRepositoryQaTestCase;
import com.puggysoft.tools.qa.SqlQaTestCaseFilterBuilderNative;

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
public class ServiceQaTestCaseGetFilter {

  @Autowired
  private IRepositoryQaTestCase repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoQaTestCase>> filter(DtoQaTestCaseFilter dtoFilter, int page, int size) {

    String query = SqlQaTestCaseFilterBuilderNative.build(dtoFilter);
    int off = page * size;
    List<EntityQaTestCase> listEntities;
    if (query.equals("")) {
      listEntities = repository.findQaTestCaseByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT qa_test_cases.* FROM qa_test_cases WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityQaTestCase.class);
      listEntities = (List<EntityQaTestCase>) filterQuery.getResultList();
    }
    List<DtoQaTestCase> listDtos = listEntities
        .stream()
        .map(DtoQaTestCase::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }

}