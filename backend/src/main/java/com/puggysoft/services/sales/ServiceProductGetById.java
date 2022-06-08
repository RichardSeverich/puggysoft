package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.entities.sales.EntityProduct;
import com.puggysoft.repositories.sales.IRepositoryProduct;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get by id. */
@Service
public class ServiceProductGetById {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for retrive. */
  public ResponseEntity<DtoProduct> getById(Long id) {
    Optional<EntityProduct> optionalEntity = repositoryProduct.findById(id);
    if (optionalEntity.isPresent()) {
      DtoProduct dtoProduct = DtoProduct.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoProduct);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}