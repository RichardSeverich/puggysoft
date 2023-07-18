package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.entities.alcaldia.EntityRegulaLotes;
import com.puggysoft.repositories.alcaldia.IRepositoryRegulaLotes;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get by id. */
@Service
public class ServiceRegulaLotesGetById {

  @Autowired
  private IRepositoryRegulaLotes repositoryRegulaLotes;

  /** method for retrive. */
  public ResponseEntity<DtoRegulaLotes> getById(Long id) {
    Optional<EntityRegulaLotes> optionalEntity = repositoryRegulaLotes.findById(id);
    if (optionalEntity.isPresent()) {
      DtoRegulaLotes dtoControl = DtoRegulaLotes.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoControl);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}