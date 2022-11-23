package com.puggysoft.entities.system;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "system_properties")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntitySystemProperty extends EntitySuperClass {

  private String name;

  private String value;

}
