package com.puggysoft.entities.datastorage;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "storage_record")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityStorageRecord extends EntitySuperClass {

  @Column(name = "short_name")
  private String shortName;
  @Column(name = "schema_")
  private String schema;
  @Column(name = "aux")
  private String aux;
  @Column(name = "tenant")
  private String tenant;

}