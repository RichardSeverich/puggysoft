package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntityProductGroups;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoProductGroups extends DtoSuperClass {
  @NotNull
  private String name;

  private byte[] image;

  @Size(min = 3, max = 30)
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityProductGroups dtoToEntity() {
    EntityProductGroups entity = new EntityProductGroups();
    entity.setId(id);
    entity.setName(name);
    entity.setImage(image);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoProductGroups entityToDto(EntityProductGroups entity) {
    DtoProductGroups dto = new DtoProductGroups();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setImage(entity.getImage());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
