package com.puggysoft.entities.users;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "users_roles")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityUserRole extends EntitySuperClass {

  @Column(name = "id_user")
  private Long idUser;

  @Column(name = "id_role")
  private Long idRole;

}