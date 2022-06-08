package com.puggysoft.dtos.sales;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.sales.EntityClient;
import java.sql.Blob;
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
public class DtoClient extends DtoSuperClass {

  @NotNull
  @Size(min = 3, max = 20)
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
  @Size(min = 3, max = 30)
  private String telephone;

  @NotNull
  @Size(min = 3, max = 60)
  private String address;

  @NotNull
  @Email
  @Size(min = 3, max = 30)
  private String email;

  private Blob image;

  /** convert from dto to entity. */
  public EntityClient dtoToEntity() {
    EntityClient entity = new EntityClient();
    entity.setId(id);
    entity.setDni(dni);
    entity.setName(name);
    entity.setSecondName(secondName);
    entity.setLastName(lastName);
    entity.setSecondLastName(secondLastName);
    entity.setBirthDate(birthDate);
    entity.setTelephone(telephone);
    entity.setAddress(address);
    entity.setEmail(email);
    entity.setImage(image);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoClient entityToDto(EntityClient entity) {
    DtoClient dto = new DtoClient();
    dto.setId(entity.getId());
    dto.setDni(entity.getDni());
    dto.setName(entity.getName());
    dto.setName(entity.getSecondName());
    dto.setLastName(entity.getLastName());
    dto.setLastName(entity.getSecondLastName());
    dto.setBirthDate(entity.getBirthDate());
    dto.setTelephone(entity.getTelephone());
    dto.setAddress(entity.getAddress());
    dto.setEmail(entity.getEmail());
    dto.setImage(entity.getImage());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}