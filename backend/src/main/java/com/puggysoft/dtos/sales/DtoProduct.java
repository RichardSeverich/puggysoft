package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntityProduct;
import java.sql.Blob;
import javax.validation.constraints.NotNull;
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

  @NotNull
  private Integer stock;

  @NotNull
  private String description;

  private Blob image;

  private String barCode;

  private String location;

  private Integer minimumStock;

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
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}