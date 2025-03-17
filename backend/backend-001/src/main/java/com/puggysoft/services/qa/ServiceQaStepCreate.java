package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaStep;
import com.puggysoft.entities.qa.EntityQaStep;
import com.puggysoft.repositories.qa.IRepositoryQaStep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceQaStepCreate {

  @Autowired
  private IRepositoryQaStep repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoQaStep dtoQaStep) {
    try {
      EntityQaStep entity = repository.save(dtoQaStep.dtoToEntity());
      DtoQaStep dto = DtoQaStep.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
