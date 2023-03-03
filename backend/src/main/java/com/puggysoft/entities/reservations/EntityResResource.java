package com.puggysoft.entities.reservations;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "res_resources")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityResResource extends EntitySuperClass {

  private String name;

  @Column(name = "price_interval")
  private int priceInterval;

  @Lob
  private byte[] image;

  private String description;

  private String aux;

}
