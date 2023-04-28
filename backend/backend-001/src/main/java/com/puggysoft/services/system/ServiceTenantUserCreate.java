package com.puggysoft.services.system;

import com.puggysoft.dtos.system.DtoTenantUser;
import com.puggysoft.entities.system.EntityTenantUser;
import com.puggysoft.repositories.system.IRepositoryTenantUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceTenantUserCreate {

  @Autowired
  private IRepositoryTenantUser repositoryTenantUser;

  /** method for create. */
  public ResponseEntity<String> create(DtoTenantUser dtoTenantUser) {
    try {
      EntityTenantUser entity = repositoryTenantUser.save(dtoTenantUser.dtoToEntity());
      DtoTenantUser dto = DtoTenantUser.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}