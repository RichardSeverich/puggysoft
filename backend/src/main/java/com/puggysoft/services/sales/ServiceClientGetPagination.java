package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.repositories.sales.IRepositoryClient;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get pagination. */
@Service
public class ServiceClientGetPagination {

  @Autowired
  private IRepositoryClient repositoryClient;

  /** method for retrive with pagination. */
  public ResponseEntity<List<DtoClient>> getPagination(Pageable pageable) {
    List<DtoClient> listDtoClient = repositoryClient.findAll(pageable)
            .stream()
            .map(DtoClient::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoClient);
  }
}