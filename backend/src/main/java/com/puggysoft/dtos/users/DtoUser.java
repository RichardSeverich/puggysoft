package com.puggysoft.dtos.users;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.users.EntityUser;
// import java.sql.Blob;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoUser extends DtoSuperClass {

  @NotNull
  @Size(min = 3, max = 30)
  private String username;

  @NotNull
  @Size(min = 3, max = 30)
  private String password;

  @NotNull
  @Size(min = 3, max = 30)
  private String dni;

  @NotNull
  @Size(min = 3, max = 30)
  private String name;

  @NotNull
  @Size(min = 3, max = 30)
  private String secondName;

  @NotNull
  @Size(min = 3, max = 30)
  private String lastName;

  @NotNull
  @Size(min = 3, max = 30)
  private String secondLastName;

  @NotNull
  @Size(min = 10, max = 10)
  @Pattern(regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")
  private String birthDate;

  @NotNull
  private int age;

  @NotNull
  @Size(min = 3, max = 10)
  @Pattern(regexp = "(MALE|FEMALE)")
  private String sex; // MALE, FEMALE

  @NotNull
  @Size(min = 3, max = 60)
  private String occupation;

  @NotNull
  @Size(min = 3, max = 30)
  private String telephone;

  @NotNull
  @Size(min = 3, max = 60)
  private String address;

  @NotNull
  @Email
  @Size(min = 7, max = 60)
  private String email;

  @NotNull
  private Boolean active;

  private byte[] image;

  @NotNull
  private Boolean emailVerified;

  /** convert from dto to entity. */
  public EntityUser dtoToEntity() {
    EntityUser entity = new EntityUser();
    entity.setId(id);
    entity.setUsername(username);
    entity.setPassword(password);
    entity.setDni(dni);
    entity.setName(name);
    entity.setSecondName(secondName);
    entity.setLastName(lastName);
    entity.setSecondLastName(secondLastName);
    entity.setBirthDate(birthDate);
    entity.setAge(age);
    entity.setSex(sex);
    entity.setOccupation(occupation);
    entity.setTelephone(telephone);
    entity.setAddress(address);
    entity.setEmail(email);
    entity.setActive(active);
    entity.setImage(image);
    entity.setEmailVerified(emailVerified);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoUser entityToDto(EntityUser entity) {
    DtoUser dto = new DtoUser();
    dto.setId(entity.getId());
    dto.setUsername(entity.getUsername());
    dto.setPassword(entity.getPassword());
    dto.setDni(entity.getDni());
    dto.setName(entity.getName());
    dto.setSecondName(entity.getSecondName());
    dto.setLastName(entity.getLastName());
    dto.setSecondLastName(entity.getSecondLastName());
    dto.setBirthDate(entity.getBirthDate());
    dto.setAge(entity.getAge());
    dto.setSex(entity.getSex());
    dto.setOccupation(entity.getOccupation());
    dto.setTelephone(entity.getTelephone());
    dto.setAddress(entity.getAddress());
    dto.setEmail(entity.getEmail());
    dto.setActive(entity.getActive());
    dto.setImage(entity.getImage());
    dto.setEmailVerified(entity.getEmailVerified());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}