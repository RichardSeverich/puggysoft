package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosDocentes;
import com.puggysoft.entities.escuela.EntityEscuelaCursosDocentes;
import com.puggysoft.repositories.escuela.IRepositoryEscuelaCursosDocentes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceEscuelaCursosDocentesCreate {

  @Autowired
  private IRepositoryEscuelaCursosDocentes repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoEscuelaCursosDocentes dtoEscuelaCursosDocentes) {
    try {
      EntityEscuelaCursosDocentes entity = repository
          .save(dtoEscuelaCursosDocentes.dtoToEntity());
      DtoEscuelaCursosDocentes dto = DtoEscuelaCursosDocentes.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
