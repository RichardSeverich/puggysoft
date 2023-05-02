package com.puggysoft.dtos.system;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.system.EntityTenant;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoTenant extends DtoSuperClass {

  @NotNull
  private String name;

  @NotNull
  @Size(min = 3, max = 30)
  private String shortName;

  @NotNull
  private String description;

  @NotNull
  private String telephone;

  @NotNull
  private String address;

  private byte[] image;

  /** convert from dto to entity. */
  public EntityTenant dtoToEntity() {
    EntityTenant entity = new EntityTenant();
    entity.setId(id);
    entity.setName(name);
    entity.setShortName(shortName);
    entity.setDescription(description);
    entity.setTelephone(telephone);
    entity.setAddress(address);
    entity.setImage(image);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoTenant entityToDto(EntityTenant entity) {
    DtoTenant dto = new DtoTenant();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setShortName(entity.getShortName());
    dto.setDescription(entity.getDescription());
    dto.setTelephone(entity.getTelephone());
    dto.setAddress(entity.getAddress());
    dto.setImage(entity.getImage());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}