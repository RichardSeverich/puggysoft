package com.puggysoft.services.reservations;

import com.puggysoft.dtos.reservations.DtoResScheduleWorkDay;
import com.puggysoft.entities.reservations.EntityResScheduleWorkDay;
import com.puggysoft.repositories.reservations.IRepositoryScheduleWorkDay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceScheduleWorkDayCreate {

  @Autowired
  private IRepositoryScheduleWorkDay repositoryScheduleWorkDay;

  /** method for create. */
  public ResponseEntity<String> create(DtoResScheduleWorkDay dtoResScheduleWorkDay) {
    try {
      EntityResScheduleWorkDay entity = repositoryScheduleWorkDay.save(dtoResScheduleWorkDay.dtoToEntity());
      DtoResScheduleWorkDay dto = DtoResScheduleWorkDay.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}