package com.puggysoft.entities.sales;

import com.puggysoft.entities.EntitySuperClass;
import java.sql.Blob;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "clients")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityClient extends EntitySuperClass {

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

  private String telephone;

  private String address;

  private String email;

  private Blob image;

}