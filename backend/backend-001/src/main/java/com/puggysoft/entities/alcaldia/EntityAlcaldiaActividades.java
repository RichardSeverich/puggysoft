package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alcaldia_actividades")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityAlcaldiaActividades extends EntitySuperClass {

  @Column(name = "name")
  private String name;
  @Column(name = "tenant")
  private String tenant;

}