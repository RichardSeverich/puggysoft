package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaActividades;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoAlcaldiaActividades extends DtoSuperClass {
  @NotNull
  private String name;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityAlcaldiaActividades dtoToEntity() {
    EntityAlcaldiaActividades entity = new EntityAlcaldiaActividades();
    entity.setId(id);
    entity.setName(name);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoAlcaldiaActividades entityToDto(EntityAlcaldiaActividades entity) {
    DtoAlcaldiaActividades dto = new DtoAlcaldiaActividades();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
