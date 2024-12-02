package com.puggysoft.entities.sales;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "product_groups")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityProductGroups extends EntitySuperClass {

  @Column(name = "name")
  private String name;
  @Lob
  private byte[] image;
  @Column(name = "tenant")
  private String tenant;

}