package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoTenant;
import com.puggysoft.entities.system.EntityTenant;
import com.puggysoft.repositories.system.IRepositoryTenant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceTenantCreate {

  @Autowired
  private IRepositoryTenant repositoryTenant;

  /** method for create. */
  public ResponseEntity<String> create(DtoTenant dtoTenant) {
    try {
      EntityTenant entity = repositoryTenant.save(dtoTenant.dtoToEntity());
      DtoTenant dto = DtoTenant.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}