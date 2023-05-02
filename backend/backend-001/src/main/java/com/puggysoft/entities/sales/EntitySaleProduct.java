package com.puggysoft.entities.sales;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "sales_products")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntitySaleProduct extends EntitySuperClass {

  @Column(name = "id_sale")
  private Long idSale;

  @Column(name = "id_product")
  private Long idProduct;

  private Integer quantity;

  private String tenant;

}