package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProductGroupsProducts;
import com.puggysoft.entities.sales.EntityProductGroupsProducts;
import com.puggysoft.repositories.sales.IRepositoryProductGroupsProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceProductGroupsProductCreate {

  @Autowired
  private IRepositoryProductGroupsProduct repository;

  /** method for create. */
  public ResponseEntity<String> create(DtoProductGroupsProducts dtoProductGroupsProducts) {
    try {
      EntityProductGroupsProducts entity = repository.save(dtoProductGroupsProducts.dtoToEntity());
      DtoProductGroupsProducts dto = DtoProductGroupsProducts.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
