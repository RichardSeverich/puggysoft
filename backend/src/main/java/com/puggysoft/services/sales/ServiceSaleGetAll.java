package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.repositories.sales.IRepositorySale;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all. */
@Service
public class ServiceSaleGetAll {

  @Autowired
  private IRepositorySale repositorySale;

  /** method for retrive. */
  public ResponseEntity<List<DtoSale>> getAll() {
    List<DtoSale> listDtoSale = repositorySale.findAll()
            .stream()
            .map(DtoSale::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoSale);
  }
}