package com.puggysoft.dtos.system;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.system.EntitySystemProperty;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoSystemProperty extends DtoSuperClass {

  @NotNull
  private String name;

  @NotNull
  private String value;

  /** convert from dto to entity. */
  public EntitySystemProperty dtoToEntity() {
    EntitySystemProperty entity = new EntitySystemProperty();
    entity.setId(id);
    entity.setName(name);
    entity.setValue(value);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoSystemProperty entityToDto(EntitySystemProperty entity) {
    DtoSystemProperty dto = new DtoSystemProperty();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setValue(entity.getValue());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}