package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.entities.users.EntityUser;
import com.puggysoft.repositories.users.IRepositoryUser;
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
public class ServiceUserPicture {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for user picture update. */
  public ResponseEntity<String> setPicture(MultipartFile file, Long userId) {

    Optional<EntityUser> optionalEntity = repositoryUser.findById(userId);
    if (optionalEntity.isPresent()) {
      // Type of the file: image/jpeg
      // String contentType = file.getContentType();
      // Name of the file: example.jpg
      // String file.getOriginalFilename();
      try {
        EntityUser entity = optionalEntity.get();
        entity.setImage(file.getBytes());
        entity = repositoryUser.save(entity);
        DtoUser dto = DtoUser.entityToDto(entity);
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
