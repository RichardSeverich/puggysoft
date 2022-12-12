package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntitySale;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoSale extends DtoSuperClass {

  @Size(min = 3, max = 30)
  private String client;

  @NotNull
  // TODO, IN_PROGRESS, DONE.
  private String status;

  /** convert from dto to entity. */
  public EntitySale dtoToEntity() {
    EntitySale entity = new EntitySale();
    entity.setId(id);
    entity.setClient(client);
    entity.setStatus(status);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoSale entityToDto(EntitySale entity) {
    DtoSale dto = new DtoSale();
    dto.setId(entity.getId());
    dto.setClient(entity.getClient());
    dto.setStatus(entity.getStatus());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}