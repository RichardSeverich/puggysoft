package com.puggysoft.dtos.sales;

import com.puggysoft.entities.sales.EntitySaleReportDetail;
import lombok.Data;

/**
* Class.
*/
@Data
public class DtoSaleReportDetail {
  public String identifier;
  public Double quantity;
  public Double purchasePrice;
  public Double salePrice;
  public Double profit;

  /** convert from dto to entity. */
  public EntitySaleReportDetail dtoToEntity() {
    EntitySaleReportDetail entity = new EntitySaleReportDetail();
    entity.setIdentifier(identifier);
    entity.setQuantity(quantity);
    entity.setPurchasePrice(purchasePrice);
    entity.setSalePrice(salePrice);
    entity.setProfit(profit);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoSaleReportDetail entityToDto(EntitySaleReportDetail entity) {
    DtoSaleReportDetail dto = new DtoSaleReportDetail();
    dto.setIdentifier(entity.getIdentifier());
    dto.setQuantity(entity.getQuantity());
    dto.setPurchasePrice(entity.getPurchasePrice());
    dto.setSalePrice(entity.getSalePrice());
    dto.setProfit(entity.getProfit());
    return dto;
  }
}