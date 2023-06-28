package com.puggysoft.dtos.system;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.system.EntityTenantRole;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoTenantRole extends DtoSuperClass {

  @NotNull
  private String role;

  @NotNull
  private String tenant;

  /** convert from dto to entity. */
  public EntityTenantRole dtoToEntity() {
    EntityTenantRole entity = new EntityTenantRole();
    entity.setId(id);
    entity.setTenant(tenant);
    entity.setRole(role);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoTenantRole entityToDto(EntityTenantRole entity) {
    DtoTenantRole dto = new DtoTenantRole();
    dto.setId(entity.getId());
    dto.setRole(entity.getRole());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
