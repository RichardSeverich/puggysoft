package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.entities.qa.EntityQaTestCase;
import com.puggysoft.repositories.qa.IRepositoryQaTestCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceQaTestCaseCreate {

  @Autowired
  private IRepositoryQaTestCase repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoQaTestCase dtoQaTestCase) {
    try {
      EntityQaTestCase entity = repository.save(dtoQaTestCase.dtoToEntity());
      DtoQaTestCase dto = DtoQaTestCase.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
