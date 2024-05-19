package com.puggysoft.dtos.qa;

import com.puggysoft.dtos.DtoSuperClass;
import javax.validation.constraints.NotNull;

import com.puggysoft.entities.qa.EntityQaTestCase;
import com.puggysoft.models.qa.EnumQaPriority;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoQaTestCase extends DtoSuperClass {
  @NotNull
  private String title;
  @NotNull
  private String description;
  @NotNull
  private EnumQaPriority priority;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityQaTestCase dtoToEntity() {
    EntityQaTestCase entity = new EntityQaTestCase();
    entity.setId(id);
    entity.setTitle(title);
    entity.setDescription(description);
    entity.setPriority(priority.toString());
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoQaTestCase entityToDto(EntityQaTestCase entity) {
    DtoQaTestCase dto = new DtoQaTestCase();
    dto.setId(entity.getId());
    dto.setTitle(entity.getTitle());
    dto.setDescription(entity.getDescription());
    dto.setPriority(EnumQaPriority.valueOf(entity.getPriority()));
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
