package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividades;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaActividades;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaActividades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceAlcaldiaActividadesCreate {

  @Autowired
  private IRepositoryAlcaldiaActividades repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoAlcaldiaActividades dto) {
    try {
      EntityAlcaldiaActividades entity = repository
          .save(dto.dtoToEntity());
          DtoAlcaldiaActividades dtoNew = DtoAlcaldiaActividades.entityToDto(entity);
      String idString = String.valueOf(dtoNew.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
