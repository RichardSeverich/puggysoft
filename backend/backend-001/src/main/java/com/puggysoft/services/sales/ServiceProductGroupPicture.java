package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProductGroups;
import com.puggysoft.entities.sales.EntityProductGroups;
import com.puggysoft.repositories.sales.IRepositoryProductGroups;
import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/** Services for product picture update. */
@Service
public class ServiceProductGroupPicture {

  @Autowired
  private IRepositoryProductGroups repository;

  /** method for product picture update. */
  public ResponseEntity<String> setPicture(MultipartFile file, Long productGroupId) {

    Optional<EntityProductGroups> optionalEntity = repository.findById(productGroupId);
    if (optionalEntity.isPresent()) {
      // Type of the file: image/jpeg
      // String contentType = file.getContentType();
      // Name of the file: example.jpg
      // String file.getOriginalFilename();
      try {
        EntityProductGroups entity = optionalEntity.get();
        entity.setImage(file.getBytes());
        entity = repository.save(entity);
        DtoProductGroups dto = DtoProductGroups.entityToDto(entity);
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
