package com.puggysoft.services.reservations;

import com.puggysoft.dtos.reservations.DtoResScheduleIntervalTime;
import com.puggysoft.entities.reservations.EntityResScheduleIntervalTime;
import com.puggysoft.repositories.reservations.IRepositoryScheduleIntervalTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceScheduleIntervalTimeCreate {

  @Autowired
  private IRepositoryScheduleIntervalTime repositoryScheduleIntervalTime;

  /** method for create. */
  public ResponseEntity<String> create(DtoResScheduleIntervalTime dtoResScheduleIntervalTime) {
    try {
      EntityResScheduleIntervalTime entity = repositoryScheduleIntervalTime.save(dtoResScheduleIntervalTime.dtoToEntity());
      DtoResScheduleIntervalTime dto = DtoResScheduleIntervalTime.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}