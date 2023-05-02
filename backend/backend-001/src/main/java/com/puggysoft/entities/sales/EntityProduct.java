package com.puggysoft.entities.sales;

import com.puggysoft.entities.EntitySuperClass;
// import java.sql.Blob;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "products")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityProduct extends EntitySuperClass {

  private String name;

  @Column(name = "purchase_price")
  private Double purchasePrice;

  @Column(name = "sale_price")
  private Double salePrice;

  private Integer stock;

  private String description;

  @Lob
  private byte[] image;

  @Column(name = "bar_code")
  private String barCode;

  private String location;

  @Column(name = "minimum_stock")
  private Integer minimumStock;

  private String code;

  private String tenant;

}
