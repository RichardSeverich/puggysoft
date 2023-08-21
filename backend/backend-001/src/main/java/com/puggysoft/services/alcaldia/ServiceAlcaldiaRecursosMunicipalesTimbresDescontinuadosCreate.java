package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosCreate {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesTimbresDescontinuados repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados dtoAlcaldiaRecursosMunicipales) {
    try {
      EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados entity = repository
          .save(dtoAlcaldiaRecursosMunicipales.dtoToEntity());
          DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados dto = DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
