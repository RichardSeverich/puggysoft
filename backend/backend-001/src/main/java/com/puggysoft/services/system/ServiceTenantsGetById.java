package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoTenant;
import com.puggysoft.entities.system.EntityTenant;
import com.puggysoft.repositories.system.IRepositoryTenant;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get by id. */
@Service
public class ServiceTenantsGetById {

  @Autowired
  private IRepositoryTenant repositoryTenant;

  /** method for retrive. */
  public ResponseEntity<DtoTenant> getById(Long id) {
    Optional<EntityTenant> optionalEntity = repositoryTenant.findById(id);
    if (optionalEntity.isPresent()) {
      DtoTenant dtoTenant = DtoTenant.entityToDto(optionalEntity.get());
      return ResponseEntity.status(HttpStatus.OK).body(dtoTenant);
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}