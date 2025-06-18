package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosMateriasDocentes;
import com.puggysoft.entities.escuela.EntityEscuelaCursosMateriasDocentes;
import com.puggysoft.repositories.escuela.IRepositoryEscuelaCursosMateriasDocentes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceEscuelaCursosMateriasDocentesCreate {

  @Autowired
  private IRepositoryEscuelaCursosMateriasDocentes repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoEscuelaCursosMateriasDocentes dtoEscuelaCursosDocentes) {
    try {
      EntityEscuelaCursosMateriasDocentes entity = repository
          .save(dtoEscuelaCursosDocentes.dtoToEntity());
      DtoEscuelaCursosMateriasDocentes dto = DtoEscuelaCursosMateriasDocentes.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
