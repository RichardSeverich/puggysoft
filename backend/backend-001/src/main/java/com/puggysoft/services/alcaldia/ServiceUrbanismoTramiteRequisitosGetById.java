package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitos;
import com.puggysoft.entities.alcaldia.EntityUrbanismoTramiteRequisitos;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoTramiteRequisitos;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get by id. */
@Service
public class ServiceUrbanismoTramiteRequisitosGetById {

  @Autowired
  private IRepositoryUrbanismoTramiteRequisitos repositoryUrbanismoTramiteRequisitos;

  /** method for retrive. */
  public ResponseEntity<DtoUrbanismoTramiteRequisitos> getById(Long id) {
    Optional<EntityUrbanismoTramiteRequisitos> optionalEntity = repositoryUrbanismoTramiteRequisitos.findById(id);
    if (optionalEntity.isPresent()) {
      DtoUrbanismoTramiteRequisitos dtoControl = DtoUrbanismoTramiteRequisitos.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoControl);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}