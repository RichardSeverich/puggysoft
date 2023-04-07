package com.puggysoft.services.reservations;

import com.puggysoft.dtos.reservations.DtoResIntervalTime;
import com.puggysoft.entities.reservations.EntityResIntervalTime;
import com.puggysoft.repositories.reservations.IRepositoryIntervalTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceIntervalTimeCreate {

  @Autowired
  private IRepositoryIntervalTime repositoryIntervalTime;

  /** method for create. */
  public ResponseEntity<String> create(DtoResIntervalTime dtoResIntervalTime) {
    try {
      EntityResIntervalTime entity = repositoryIntervalTime.save(dtoResIntervalTime.dtoToEntity());
      DtoResIntervalTime dto = DtoResIntervalTime.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}