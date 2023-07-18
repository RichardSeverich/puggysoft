package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.entities.alcaldia.EntityRegulaLotes;
import com.puggysoft.repositories.alcaldia.IRepositoryRegulaLotes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceRegulaLotesCreate {

  @Autowired
  private IRepositoryRegulaLotes repositoryRegulaLotes;

  /** method for create. */
  public ResponseEntity<String> create(DtoRegulaLotes dtoRegulaLotes) {
    try {
      EntityRegulaLotes entity = repositoryRegulaLotes
          .save(dtoRegulaLotes.dtoToEntity());
      DtoRegulaLotes dto = DtoRegulaLotes.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
