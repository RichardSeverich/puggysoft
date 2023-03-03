package com.puggysoft.dtos.reservations;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.reservations.EntityResScheduleIntervalTime;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoResScheduleIntervalTime extends DtoSuperClass {

  @NotNull
  private Long idSchedule;

  @NotNull
  private Long idIntervalTime;

  /** convert from dto to entity. */
  public EntityResScheduleIntervalTime dtoToEntity() {
    EntityResScheduleIntervalTime entity = new EntityResScheduleIntervalTime();
    entity.setId(id);
    entity.setIdSchedule(idSchedule);
    entity.setIdIntervalTime(idIntervalTime);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoResScheduleIntervalTime entityToDto(EntityResScheduleIntervalTime entity) {
    DtoResScheduleIntervalTime dto = new DtoResScheduleIntervalTime();
    dto.setId(entity.getId());
    dto.setIdSchedule(entity.getIdSchedule());
    dto.setIdIntervalTime(entity.getIdIntervalTime());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}