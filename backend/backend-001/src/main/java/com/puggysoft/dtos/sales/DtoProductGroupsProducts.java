package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntityProductGroupsProducts;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoProductGroupsProducts extends DtoSuperClass {
  @NotNull
  private String idProduct;
  @NotNull
  private String idProductGroup;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityProductGroupsProducts dtoToEntity() {
    EntityProductGroupsProducts entity = new EntityProductGroupsProducts();
    entity.setId(id);
    entity.setIdProduct(idProduct);
    entity.setIdProductGroup(idProductGroup);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoProductGroupsProducts entityToDto(EntityProductGroupsProducts entity) {
    DtoProductGroupsProducts dto = new DtoProductGroupsProducts();
    dto.setId(entity.getId());
    dto.setIdProduct(entity.getIdProduct());
    dto.setIdProductGroup(entity.getIdProductGroup());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
