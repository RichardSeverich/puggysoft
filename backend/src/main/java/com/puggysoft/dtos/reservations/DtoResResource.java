package com.puggysoft.dtos.reservations;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.reservations.EntityResResource;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoResResource extends DtoSuperClass {

  @NotNull
  @Size(min = 3, max = 60)
  private String name;

  @NotNull
  private int priceInterval;

  private byte[] image;

  @NotNull
  @Size(min = 3, max = 60)
  private String description;

  private String aux;

  /** convert from dto to entity. */
  public EntityResResource dtoToEntity() {
    EntityResResource entity = new EntityResResource();
    entity.setId(id);
    entity.setName(name);
    entity.setPriceInterval(priceInterval);
    entity.setImage(image);
    entity.setDescription(description);
    entity.setAux(aux);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoResResource entityToDto(EntityResResource entity) {
    DtoResResource dto = new DtoResResource();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setPriceInterval(entity.getPriceInterval());
    dto.setImage(entity.getImage());
    dto.setDescription(entity.getDescription());
    dto.setAux(entity.getAux());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}