package com.puggysoft.services.reservations;

import com.puggysoft.dtos.reservations.DtoResResourceSchedule;
import com.puggysoft.entities.reservations.EntityResResourceSchedule;
import com.puggysoft.repositories.reservations.IRepositoryResourceSchedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceResourceScheduleCreate {

  @Autowired
  private IRepositoryResourceSchedule repositoryResourceSchedule;

  /** method for create. */
  public ResponseEntity<String> create(DtoResResourceSchedule dtoResResourceSchedule) {
    try {
      EntityResResourceSchedule entity = repositoryResourceSchedule.save(dtoResResourceSchedule.dtoToEntity());
      DtoResResourceSchedule dto = DtoResResourceSchedule.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}