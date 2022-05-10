package com.puggysoft.dtos;

import lombok.Data;

import javax.validation.constraints.Size;
import java.util.Date;

@Data
public abstract class DtoSuperClass {

  protected Long id;

  @Size(min = 3, max = 20)
  protected String createdBy;

  @Size(min = 3, max = 20)
  protected String updatedBy;

  protected Date creationDate;

  protected Date updateDate;
}