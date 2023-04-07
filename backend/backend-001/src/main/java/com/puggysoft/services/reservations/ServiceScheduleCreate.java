package com.puggysoft.services.reservations;

import com.puggysoft.dtos.reservations.DtoResSchedule;
import com.puggysoft.entities.reservations.EntityResSchedule;
import com.puggysoft.repositories.reservations.IRepositorySchedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceScheduleCreate {

  @Autowired
  private IRepositorySchedule repositorySchedule;

  /** method for create. */
  public ResponseEntity<String> create(DtoResSchedule dtoResSchedule) {
    try {
      EntityResSchedule entity = repositorySchedule.save(dtoResSchedule.dtoToEntity());
      DtoResSchedule dto = DtoResSchedule.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}