package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTestCase;
import com.puggysoft.repositories.qa.IRepositoryQaTestCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceQaTestCaseEditById {

  @Autowired
  private IRepositoryQaTestCase repositoryQaTestCase;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoQaTestCase dto) {
    if (repositoryQaTestCase.existsById(id.longValue())) {
      try {
        dto.setId(id.longValue());
        repositoryQaTestCase.save(dto.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}