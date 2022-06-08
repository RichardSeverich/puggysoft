package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.repositories.sales.IRepositoryProduct;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all. */
@Service
public class ServiceProductGetAll {

  @Autowired
  private IRepositoryProduct repositoryProduct;

  /** method for retrive. */
  public ResponseEntity<List<DtoProduct>> getAll() {
    List<DtoProduct> listDtoDtoProduct = repositoryProduct.findAll()
            .stream()
            .map(DtoProduct::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoDtoProduct);
  }
}