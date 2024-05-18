package com.puggysoft.services.qa;

import com.puggysoft.dtos.qa.DtoQaTag;
import com.puggysoft.entities.qa.EntityQaTag;
import com.puggysoft.repositories.qa.IRepositoryQaTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceQaTagCreate {

  @Autowired
  private IRepositoryQaTag repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoQaTag dtoQaTag) {
    try {
      EntityQaTag entity = repository.save(dtoQaTag.dtoToEntity());
      DtoQaTag dto = DtoQaTag.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
