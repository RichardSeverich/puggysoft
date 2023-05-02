package com.puggysoft.dtos.system;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.system.EntityTenantUser;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoTenantUser extends DtoSuperClass {

  @NotNull
  private String tenant;

  @NotNull
  private String username;

  /** convert from dto to entity. */
  public EntityTenantUser dtoToEntity() {
    EntityTenantUser entity = new EntityTenantUser();
    entity.setId(id);
    entity.setTenant(tenant);
    entity.setUsername(username);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoTenantUser entityToDto(EntityTenantUser entity) {
    DtoTenantUser dto = new DtoTenantUser();
    dto.setId(entity.getId());
    dto.setUsername(entity.getUsername());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
