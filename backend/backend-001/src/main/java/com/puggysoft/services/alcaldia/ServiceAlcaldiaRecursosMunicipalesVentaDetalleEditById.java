package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesVentaDetalleEditById {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle repository;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id,
      DtoAlcaldiaRecursosMunicipalesVentaDetalle dto) {
    if (repository.existsById(id)) {
      try {
        dto.setId(id.longValue());
        repository.save(dto.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}