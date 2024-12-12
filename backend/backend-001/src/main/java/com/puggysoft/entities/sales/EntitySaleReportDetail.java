package com.puggysoft.entities.sales;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class EntitySaleReportDetail {

  @Id
  @Column(name = "identifier")
  public String identifier;

  @Column(name = "quantity")
  public Double quantity;

  @Column(name = "purchase_price")
  public Double purchasePrice;

  @Column(name = "sale_price")
  public Double salePrice;

  @Column(name = "profit")
  public Double profit;

}