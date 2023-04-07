package com.puggysoft.dtos.reservations;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.reservations.EntityResSchedule;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoResSchedule extends DtoSuperClass {

  @NotNull
  @Size(min = 3, max = 60)
  private String name;

  /** convert from dto to entity. */
  public EntityResSchedule dtoToEntity() {
    EntityResSchedule entity = new EntityResSchedule();
    entity.setId(id);
    entity.setName(name);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoResSchedule entityToDto(EntityResSchedule entity) {
    DtoResSchedule dto = new DtoResSchedule();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}