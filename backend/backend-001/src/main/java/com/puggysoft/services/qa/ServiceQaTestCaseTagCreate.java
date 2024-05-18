package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTestCaseTag;
import com.puggysoft.entities.qa.EntityQaTestCaseTag;
import com.puggysoft.repositories.qa.IRepositoryQaTestCaseTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceQaTestCaseTagCreate {

  @Autowired
  private IRepositoryQaTestCaseTag repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoQaTestCaseTag dtoQaTestCaseTag) {
    try {
      EntityQaTestCaseTag entity = repository.save(dtoQaTestCaseTag.dtoToEntity());
      DtoQaTestCaseTag dto = DtoQaTestCaseTag.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
