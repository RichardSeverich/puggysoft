package com.puggysoft.services.sales;

import com.puggysoft.repositories.sales.IRepositoryProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceProductGetPaginationSize {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for get size. */
  public ResponseEntity<Long> getSize(Long pageSize) {
    Long size = repositoryProduct.findSize();
    Long totalPages = size / pageSize;
    if (size % pageSize != 0) {
      totalPages = totalPages + 1L;
    }
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }
}