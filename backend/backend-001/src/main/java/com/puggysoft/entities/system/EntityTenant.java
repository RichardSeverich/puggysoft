package com.puggysoft.entities.system;

import com.puggysoft.entities.EntitySuperClass;
// import java.sql.Blob;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "tenants")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityTenant extends EntitySuperClass {

  private String name;

  private String description;

  private String telephone;

  private String address;

  @Lob
  private byte[] image;

}