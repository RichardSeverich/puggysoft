package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.entities.sales.EntityProduct;
import com.puggysoft.repositories.sales.IRepositoryProduct;
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
public class ServiceProductPicture {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for product picture update. */
  public ResponseEntity<String> setPicture(MultipartFile file, Long productId) {

    Optional<EntityProduct> optionalEntity = repositoryProduct.findById(productId);
    if (optionalEntity.isPresent()) {
      // Type of the file: image/jpeg
      // String contentType = file.getContentType();
      // Name of the file: example.jpg
      // String file.getOriginalFilename();
      try {
        EntityProduct entity = optionalEntity.get();
        entity.setImage(file.getBytes());
        entity = repositoryProduct.save(entity);
        DtoProduct dto = DtoProduct.entityToDto(entity);
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
