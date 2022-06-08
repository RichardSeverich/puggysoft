package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntitySale;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoSale extends DtoSuperClass {

  @NotNull
  private Long idSeller;

  @NotNull
  private Long idClient;

  @NotNull
  @Size(min = 10, max = 10)
  @Pattern(regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")
  private String saleDate;

  @NotNull
  // IN-PROGRESS, DONE.
  private String status;

  /** convert from dto to entity. */
  public EntitySale dtoToEntity() {
    EntitySale entity = new EntitySale();
    entity.setId(id);
    entity.setIdSeller(idSeller);
    entity.setIdClient(idClient);
    entity.setSaleDate(saleDate);
    entity.setStatus(status);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoSale entityToDto(EntitySale entity) {
    DtoSale dto = new DtoSale();
    dto.setId(entity.getId());
    dto.setIdSeller(entity.getIdSeller());
    dto.setIdClient(entity.getIdClient());
    dto.setSaleDate(entity.getSaleDate());
    dto.setStatus(entity.getStatus());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}