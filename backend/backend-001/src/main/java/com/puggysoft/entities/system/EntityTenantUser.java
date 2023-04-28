package com.puggysoft.entities.system;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "tenants_users")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityTenantUser extends EntitySuperClass {

  @Column(name = "id_tenant")
  private Long idTenant;

  @Column(name = "id_user")
  private Long idUser;

}