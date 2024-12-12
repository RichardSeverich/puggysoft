package com.puggysoft.dtos.sales;

import com.puggysoft.entities.sales.EntitySaleReportTotal;

import java.util.List;
import lombok.Data;

/**
* Class.
*/
@Data
public class DtoSaleReportTotal {
  public Long totalAmountOfProductsSold;
  public Double totalRevenue;
  public Double totalProfits;
  public Double purchasePrice;
  public Double salePrice;
  public List<DtoSaleReportDetail> details;

  /** convert from dto to entity. */
  public EntitySaleReportTotal dtoToEntity() {
    EntitySaleReportTotal entity = new EntitySaleReportTotal();
    entity.setTotalAmountOfProductsSold(totalAmountOfProductsSold);
    entity.setTotalRevenue(totalRevenue);
    entity.setTotalProfits(totalProfits);
    entity.setPurchasePrice(purchasePrice);
    entity.setSalePrice(salePrice);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoSaleReportTotal entityToDto(EntitySaleReportTotal entity) {
    DtoSaleReportTotal dto = new DtoSaleReportTotal();
    dto.setTotalAmountOfProductsSold(entity.getTotalAmountOfProductsSold());
    dto.setTotalRevenue(entity.getTotalRevenue());
    dto.setTotalProfits(entity.getTotalProfits());
    dto.setPurchasePrice(entity.getPurchasePrice());
    dto.setSalePrice(entity.getSalePrice());
    return dto;
  }
}