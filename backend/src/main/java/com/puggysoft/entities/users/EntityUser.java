package com.yeshua.entities.users;

import com.yeshua.entities.EntitySuperClass;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityUser extends EntitySuperClass {

  private String username;

  private String password;

  private String dni;

  private String name;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "birth_date")
  private String birthDate;

  private String address;

  private String phone;

  private String email;

}
