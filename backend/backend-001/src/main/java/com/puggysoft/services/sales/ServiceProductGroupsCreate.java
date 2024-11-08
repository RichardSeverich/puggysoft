package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProductGroups;
import com.puggysoft.entities.sales.EntityProductGroups;
import com.puggysoft.repositories.sales.IRepositoryProductGroups;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceProductGroupsCreate {

  @Autowired
  private IRepositoryProductGroups repositoryGroupProducts;

  /** method for create. */
  public ResponseEntity<String> create(DtoProductGroups dtoGroupProducts) {
    try {
      EntityProductGroups entity = repositoryGroupProducts.save(dtoGroupProducts.dtoToEntity());
      DtoProductGroups dto = DtoProductGroups.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
