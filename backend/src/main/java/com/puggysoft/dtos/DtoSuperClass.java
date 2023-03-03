package com.puggysoft.dtos;

import java.util.Date;
import javax.validation.constraints.Size;
import lombok.Data;

@Data
public abstract class DtoSuperClass {

  protected Long id;

  @Size(min = 3, max = 30)
  protected String createdBy;

  @Size(min = 3, max = 30)
  protected String updatedBy;

  protected Date creationDate;

  protected Date updateDate;
}