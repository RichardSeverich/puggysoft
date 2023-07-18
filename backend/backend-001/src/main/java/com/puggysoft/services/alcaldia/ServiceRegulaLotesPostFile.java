package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.entities.alcaldia.EntityRegulaLotes;
import com.puggysoft.repositories.alcaldia.IRepositoryRegulaLotes;
import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/** Services for RegulaLotes picture update. */
@Service
public class ServiceRegulaLotesPostFile {

  @Autowired
  private IRepositoryRegulaLotes repositoryRegulaLotes;

  /** method for RegulaLotes picture update. */
  public ResponseEntity<String> setPicture(MultipartFile file, Long regulaLotesId) {

    Optional<EntityRegulaLotes> optionalEntity = repositoryRegulaLotes.findById(regulaLotesId);
    if (optionalEntity.isPresent()) {
      // Type of the file: image/jpeg
      // String contentType = file.getContentType();
      // Name of the file: example.jpg
      // String file.getOriginalFilename();
      try {
        EntityRegulaLotes entity = optionalEntity.get();
        entity.setBoletaPago(file.getBytes());
        entity = repositoryRegulaLotes.save(entity);
        DtoRegulaLotes dto = DtoRegulaLotes.entityToDto(entity);
        String idString = String.valueOf(dto.getId());
        return ResponseEntity.status(HttpStatus.OK).body(idString);
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      } catch (IOException ex) {
        String ioException = ex.getMessage();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ioException);
      } catch (Exception ex) {
        String genericException = ex.getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(genericException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}
