package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.entities.sales.EntityClient;
import com.puggysoft.repositories.sales.IRepositoryClient;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get by id. */
@Service
public class ServiceClientGetById {

  @Autowired
  private IRepositoryClient repositoryClient;

  /** method for retrive. */
  public ResponseEntity<DtoClient> getById(Long id) {
    Optional<EntityClient> optionalEntity = repositoryClient.findById(id);
    if (optionalEntity.isPresent()) {
      DtoClient dtoClient = DtoClient.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoClient);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}