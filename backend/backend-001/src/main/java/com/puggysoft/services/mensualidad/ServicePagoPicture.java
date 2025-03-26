package com.puggysoft.services.mensualidad;

import com.puggysoft.dtos.file.DtoFile;
import com.puggysoft.entities.file.EntityFile;
import com.puggysoft.repositories.file.IRepositoryFile;
import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/** Services for user picture update. */
@Service
public class ServicePagoPicture {

  @Autowired
  private IRepositoryFile repository;

  /** method for user picture update. */
  public ResponseEntity<String> setPicture(MultipartFile file, Long saleId) {

    Optional<EntityFile> optionalEntity = repository.findFileBySale(saleId);
    if (optionalEntity.isPresent()) {
      try {
        EntityFile entity = optionalEntity.get();
        entity.setArchive(file.getBytes());
        entity.setSis(saleId.toString());
        entity = repository.save(entity);
        DtoFile dto = DtoFile.entityToDto(entity);
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
    } else {
      try {
        EntityFile newFile = new EntityFile();
        newFile.setArchive(file.getBytes());
        newFile.setSis(saleId.toString());
        newFile = repository.save(newFile);
        DtoFile dto = DtoFile.entityToDto(newFile);
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
  }
}
