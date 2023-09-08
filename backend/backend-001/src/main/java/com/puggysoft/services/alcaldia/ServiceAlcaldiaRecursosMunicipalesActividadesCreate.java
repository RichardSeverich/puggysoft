package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesActividad;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesActividad;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesActividades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesActividadesCreate {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesActividades repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoAlcaldiaRecursosMunicipalesActividad dto) {
    try {
      EntityAlcaldiaRecursosMunicipalesActividad entity = repository
          .save(dto.dtoToEntity());
          DtoAlcaldiaRecursosMunicipalesActividad dtoNew = DtoAlcaldiaRecursosMunicipalesActividad.entityToDto(entity);
      String idString = String.valueOf(dtoNew.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
