package com.puggysoft.dtos.qa;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.qa.EntityQaStep;

import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoQaStep extends DtoSuperClass {
  @NotNull
  private String title;
  @NotNull
  private String description;
  @NotNull
  private String expectedResult;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityQaStep dtoToEntity() {
    EntityQaStep entity = new EntityQaStep();
    entity.setId(id);
    entity.setTitle(title);
    entity.setDescription(description);
    entity.setExpectedResult(expectedResult);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoQaStep entityToDto(EntityQaStep entity) {
    DtoQaStep dto = new DtoQaStep();
    dto.setId(entity.getId());
    dto.setTitle(entity.getTitle());
    dto.setDescription(entity.getDescription());
    dto.setExpectedResult(entity.getExpectedResult());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
