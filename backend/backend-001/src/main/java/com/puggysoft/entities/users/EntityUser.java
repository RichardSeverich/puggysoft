package com.puggysoft.entities.users;

import com.puggysoft.entities.EntitySuperClass;
// import java.sql.Blob;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "users")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityUser extends EntitySuperClass {

  private String username;

  private String password;

  private String dni;

  private String name;

  @Column(name = "second_name")
  private String secondName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "second_last_name")
  private String secondLastName;

  @Column(name = "birth_date")
  private String birthDate;

  private int age;

  private String sex;

  private String occupation;

  private String telephone;

  private String address;

  private String email;

  private Boolean active;

  @Lob
  private byte[] image;

  @Column(name = "email_verified")
  private Boolean emailVerified;

}
