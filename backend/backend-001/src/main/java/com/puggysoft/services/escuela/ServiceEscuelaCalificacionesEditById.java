package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCalificaciones;
import com.puggysoft.repositories.escuela.IRepositoryEscuelaCalificaciones;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceEscuelaCalificacionesEditById {

  @Autowired
  private IRepositoryEscuelaCalificaciones repository;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoEscuelaCalificaciones dtoCalificaciones) {
    if (repository.existsById(id)) {
      try {
        dtoCalificaciones.setId(id.longValue());
        repository.save(dtoCalificaciones.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}
