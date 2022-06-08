package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.repositories.sales.IRepositoryClient;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all. */
@Service
public class ServiceClientGetAll {

  @Autowired
  private IRepositoryClient repositoryClient;

  /** method for retrive. */
  public ResponseEntity<List<DtoClient>> getAll() {
    List<DtoClient> listDtoClient = repositoryClient.findAll()
            .stream()
            .map(DtoClient::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoClient);
  }
}