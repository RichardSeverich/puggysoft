package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSale;
import com.puggysoft.repositories.sales.IRepositorySale;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get pagination. */
@Service
public class ServiceSaleGetPagination {

  @Autowired
  private IRepositorySale repositorySale;

  /** method for retrive with pagination. */
  public ResponseEntity<List<DtoSale>> getPagination(Pageable pageable) {
    List<DtoSale> listDtoSale = repositorySale.findAll(pageable)
            .stream()
            .map(DtoSale::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoSale);
  }
}