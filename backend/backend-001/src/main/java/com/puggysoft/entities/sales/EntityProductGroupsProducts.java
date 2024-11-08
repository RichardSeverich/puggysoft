package com.puggysoft.entities.sales;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "product_groups_products")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityProductGroupsProducts extends EntitySuperClass {

  @Column(name = "id_product")
  private String idProduct;
  @Column(name = "id_product_group")
  private String idProductGroup;
  @Column(name = "tenant")
  private String tenant;

}