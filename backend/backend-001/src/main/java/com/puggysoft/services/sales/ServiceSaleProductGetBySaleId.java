package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleProduct;
import com.puggysoft.entities.sales.EntitySaleProduct;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get by id. */
@Service
public class ServiceSaleProductGetBySaleId {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<List<DtoSaleProduct>> getBySaleId(Long saleId) {
    List<EntitySaleProduct> listEntities = repositorySaleProduct.findSalesProductsBySaleId(saleId);
    List<DtoSaleProduct> listDtoSaleProduct = listEntities
          .stream()
          .map(DtoSaleProduct::entityToDto)
          .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoSaleProduct);
  }
}