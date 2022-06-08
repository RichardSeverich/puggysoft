package com.puggysoft.services.sales;

import com.puggysoft.repositories.sales.IRepositoryProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceProductGetSize {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for get size. */
  public ResponseEntity<Long> getSize() {
    Long size = repositoryProduct.findSize();
    return ResponseEntity.status(HttpStatus.OK).body(size);
  }
}