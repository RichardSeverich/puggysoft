package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividades;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaActividades;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaActividades;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get by id. */
@Service
public class ServiceAlcaldiaActividadesGetById {

  @Autowired
  private IRepositoryAlcaldiaActividades repository;

  /** method for retrive. */
  public ResponseEntity<DtoAlcaldiaActividades> getById(Long id) {
    Optional<EntityAlcaldiaActividades> optionalEntity = repository.findById(id);
    if (optionalEntity.isPresent()) {
      DtoAlcaldiaActividades dtoControl = DtoAlcaldiaActividades.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoControl);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}