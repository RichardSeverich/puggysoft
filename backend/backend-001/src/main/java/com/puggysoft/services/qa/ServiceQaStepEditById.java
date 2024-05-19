package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaStep;
import com.puggysoft.repositories.qa.IRepositoryQaStep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceQaStepEditById {

  @Autowired
  private IRepositoryQaStep repositoryQaStep;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoQaStep dto) {
    if (repositoryQaStep.existsById(id.longValue())) {
      try {
        dto.setId(id.longValue());
        repositoryQaStep.save(dto.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}