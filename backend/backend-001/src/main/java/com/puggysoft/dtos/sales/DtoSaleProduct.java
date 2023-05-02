package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntitySaleProduct;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoSaleProduct extends DtoSuperClass {

  @NotNull
  private Long idSale;

  @NotNull
  private Long idProduct;

  @NotNull
  private Integer quantity;

  @Size(min = 3, max = 30)
  @NotNull
  private String tenant;

  /** convert from dto to entity. */
  public EntitySaleProduct dtoToEntity() {
    EntitySaleProduct entity = new EntitySaleProduct();
    entity.setId(id);
    entity.setIdSale(idSale);
    entity.setIdProduct(idProduct);
    entity.setQuantity(quantity);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoSaleProduct entityToDto(EntitySaleProduct entity) {
    DtoSaleProduct dto = new DtoSaleProduct();
    dto.setId(entity.getId());
    dto.setIdSale(entity.getIdSale());
    dto.setIdProduct(entity.getIdProduct());
    dto.setQuantity(entity.getQuantity());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}