package com.puggysoft.services.reservations;

import com.puggysoft.dtos.reservations.DtoResResource;
import com.puggysoft.entities.reservations.EntityResResource;
import com.puggysoft.repositories.reservations.IRepositoryResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceResourceCreate {

  @Autowired
  private IRepositoryResource repositoryResource;

  /** method for create. */
  public ResponseEntity<String> create(DtoResResource dtoResResource) {
    try {
      EntityResResource entity = repositoryResource.save(dtoResResource.dtoToEntity());
      DtoResResource dto = DtoResResource.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}