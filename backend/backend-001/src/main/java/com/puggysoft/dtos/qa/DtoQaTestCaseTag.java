package com.puggysoft.dtos.qa;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.qa.EntityQaTestCaseTag;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotNull;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoQaTestCaseTag extends DtoSuperClass {
  @NotNull
  private String idTestCase;
  @NotNull
  private String tagName;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityQaTestCaseTag dtoToEntity() {
    EntityQaTestCaseTag entity = new EntityQaTestCaseTag();
    entity.setId(id);
    entity.setIdTestCase(idTestCase);
    entity.setTagName(tagName);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoQaTestCaseTag entityToDto(EntityQaTestCaseTag entity) {
    DtoQaTestCaseTag dto = new DtoQaTestCaseTag();
    dto.setId(entity.getId());
    dto.setIdTestCase(entity.getIdTestCase());
    dto.setTagName(entity.getTagName());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
