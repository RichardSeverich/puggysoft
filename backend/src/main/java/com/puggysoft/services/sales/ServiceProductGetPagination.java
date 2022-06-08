package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.repositories.sales.IRepositoryProduct;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get pagination. */
@Service
public class ServiceProductGetPagination {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for retrive with pagination. */
  public ResponseEntity<List<DtoProduct>> getPagination(Pageable pageable) {
    List<DtoProduct> listDtoProduct = repositoryProduct.findAll(pageable)
            .stream()
            .map(DtoProduct::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoProduct);
  }
}