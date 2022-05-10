package com.yeshua.dtos.users;

import com.yeshua.dtos.DtoSuperClass;
import com.yeshua.entities.users.EntityUser;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@EqualsAndHashCode(callSuper = true)
public class DtoUser extends DtoSuperClass {

  @NotNull
  @Size(min = 3, max = 10)
  private String username;

  @NotNull
  @Size(min = 3, max = 10)
  private String password;

  @NotNull
  @Size(min = 3, max = 10)
  private String dni;

  @NotNull
  @Size(min = 3, max = 30)
  private String name;

  @NotNull
  @Size(min = 3, max = 30)
  private String lastName;

  @NotNull
  @Size(min = 10, max = 10)
  @Pattern(regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")
  private String birthDate;

  @NotNull
  @Size(min = 3, max = 60)
  private String address;

  @NotNull
  @Size(min = 3, max = 30)
  private String phone;

  @NotNull
  @Email
  @Size(min = 3, max = 30)
  private String email;

  public EntityUser dtoToEntity() {
    EntityUser entity = new EntityUser();
    entity.setId(id);
    entity.setUserCode(userCode);
    entity.setSpecialization((specialization == null || specialization.isEmpty()) ? "none" : specialization);
    entity.setDni(dni);
    entity.setName(name);
    entity.setLastName(lastName);
    entity.setBirthDate(birthDate);
    entity.setAddress(address);
    entity.setPhone(phone);
    entity.setEmail(email);
    entity.setUsername(username);
    entity.setPassword(password);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);

    return entity;
  }

  public static DtoUser entityToDto(EntityUser entity) {
    DtoUser dto = new DtoUser();
    dto.setId(entity.getId());
    dto.setUserCode(entity.getUserCode());
    dto.setSpecialization(entity.getSpecialization());
    dto.setDni(entity.getDni());
    dto.setName(entity.getName());
    dto.setLastName(entity.getLastName());
    dto.setBirthDate(entity.getBirthDate());
    dto.setAddress(entity.getAddress());
    dto.setPhone(entity.getPhone());
    dto.setEmail(entity.getEmail());
    dto.setUsername(entity.getUsername());
    dto.setPassword(entity.getPassword());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());

    return dto;
  }
}