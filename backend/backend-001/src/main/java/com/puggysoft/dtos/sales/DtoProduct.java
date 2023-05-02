package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntityProduct;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoProduct extends DtoSuperClass {

  @NotNull
  private String name;

  @NotNull
  private Double purchasePrice;

  @NotNull
  private Double salePrice;

  /*
  * When returns sales_product, stock could be quantity of relation.
  * When returns sales_product, id of products is sales_product.id
  */
  @NotNull
  private Integer stock;

  @NotNull
  private String description;

  private byte[] image;

  private String barCode;

  private String location;

  private Integer minimumStock;

  private String code;

  @Size(min = 3, max = 30)
  @NotNull
  private String tenant;

  /** convert from dto to entity. */
  public EntityProduct dtoToEntity() {
    EntityProduct entity = new EntityProduct();
    entity.setId(id);
    entity.setName(name);
    entity.setPurchasePrice(purchasePrice);
    entity.setSalePrice(salePrice);
    entity.setStock(stock);
    entity.setDescription(description);
    entity.setImage(image);
    entity.setBarCode(barCode);
    entity.setLocation(location);
    entity.setMinimumStock(minimumStock);
    entity.setCode(code);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoProduct entityToDto(EntityProduct entity) {
    DtoProduct dto = new DtoProduct();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setPurchasePrice(entity.getPurchasePrice());
    dto.setSalePrice(entity.getSalePrice());
    dto.setStock(entity.getStock());
    dto.setDescription(entity.getDescription());
    dto.setImage(entity.getImage());
    dto.setBarCode(entity.getBarCode());
    dto.setLocation(entity.getLocation());
    dto.setMinimumStock(entity.getMinimumStock());
    dto.setCode(entity.getCode());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}