package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesGrupo;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesGrupo;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesGrupo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesGrupoCreate {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesGrupo repositoryAlcaldiaRecursosMunicipalesGrupo;

  /** method for create. */
  public ResponseEntity<String> create(DtoAlcaldiaRecursosMunicipalesGrupo dtoAlcaldiaRecursosMunicipalesGrupo) {
    try {
      EntityAlcaldiaRecursosMunicipalesGrupo entity = repositoryAlcaldiaRecursosMunicipalesGrupo
          .save(dtoAlcaldiaRecursosMunicipalesGrupo.dtoToEntity());
          DtoAlcaldiaRecursosMunicipalesGrupo dto = DtoAlcaldiaRecursosMunicipalesGrupo.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
