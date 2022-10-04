package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.entities.sales.EntityProduct;
import com.puggysoft.repositories.sales.IRepositoryProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceProductCreate {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for create. */
  public ResponseEntity<String> create(DtoProduct dtoProduct) {
    try {
      EntityProduct entity = repositoryProduct.save(dtoProduct.dtoToEntity());
      DtoProduct dto = DtoProduct.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}