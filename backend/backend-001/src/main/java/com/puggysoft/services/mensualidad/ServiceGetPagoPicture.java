package com.puggysoft.services.mensualidad;

import com.puggysoft.dtos.file.DtoFile;
import com.puggysoft.entities.file.EntityFile;
import com.puggysoft.repositories.file.IRepositoryFile;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for user picture update. */
@Service
public class ServiceGetPagoPicture {

  @Autowired
  private IRepositoryFile repository;

  /** method for user picture update. */
  public ResponseEntity<DtoFile> getPicture(Long saleId) {

    Optional<EntityFile> optionalEntity = repository.findFileBySale(saleId);
    if (optionalEntity.isPresent()) {
      EntityFile entity = optionalEntity.get();
      DtoFile dto = DtoFile.entityToDto(entity);
      return ResponseEntity.status(HttpStatus.OK).body(dto);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}
