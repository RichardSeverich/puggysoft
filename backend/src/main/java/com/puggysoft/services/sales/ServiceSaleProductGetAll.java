package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all. */
@Service
public class ServiceSaleProductGetAll {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<List<DtoSaleProduct>> getAll() {
    List<DtoSaleProduct> listDtoSaleProduct = repositorySaleProduct.findAll()
            .stream()
            .map(DtoSaleProduct::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoSaleProduct);
  }
}