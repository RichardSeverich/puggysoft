package com.puggysoft.entities.users;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "roles")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityRole extends EntitySuperClass {

  private String name;

}