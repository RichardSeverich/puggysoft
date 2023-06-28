package com.puggysoft.entities.system;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "tenants_roles")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityTenantRole extends EntitySuperClass {

  private String role;

  private String tenant;

}