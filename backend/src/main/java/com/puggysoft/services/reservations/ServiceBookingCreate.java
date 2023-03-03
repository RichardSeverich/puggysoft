package com.puggysoft.services.reservations;

import com.puggysoft.dtos.reservations.DtoResBooking;
import com.puggysoft.entities.reservations.EntityResBooking;
import com.puggysoft.repositories.reservations.IRepositoryBooking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceBookingCreate {

  @Autowired
  private IRepositoryBooking repositoryBooking;

  /** method for create. */
  public ResponseEntity<String> create(DtoResBooking dtoResBooking) {
    try {
      EntityResBooking entity = repositoryBooking.save(dtoResBooking.dtoToEntity());
      DtoResBooking dto = DtoResBooking.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}