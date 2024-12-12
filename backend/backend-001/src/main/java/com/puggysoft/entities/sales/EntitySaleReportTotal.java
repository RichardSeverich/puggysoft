package com.puggysoft.entities.sales;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class EntitySaleReportTotal {

  @Id
  @Column(name = "total_amount_of_products_sold")
  public Long totalAmountOfProductsSold;

  @Column(name = "total_revenue")
  public Double totalRevenue;

  @Column(name = "total_profits")
  public Double totalProfits;

  @Column(name = "purchase_price")
  public Double purchasePrice;

  @Column(name = "sale_price")
  public Double salePrice;

  public EntitySaleReportTotal() {
  }

  /**
   * Este constructor inicializa el reporte de ventas con los valores dados.
   *
   * @param totalAmountOfProductsSold El total de productos vendidos.
   * @param totalRevenue El total de ingresos obtenidos.
   * @param totalProfits El total de beneficios generados.
  */
  public EntitySaleReportTotal(Long totalAmountOfProductsSold, Double totalRevenue, Double totalProfits) {
    this.totalAmountOfProductsSold = totalAmountOfProductsSold;
    this.totalRevenue = totalRevenue;
    this.totalProfits = totalProfits;
  }

}