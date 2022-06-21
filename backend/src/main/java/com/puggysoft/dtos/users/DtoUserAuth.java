package com.puggysoft.dtos.users;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

/**
* Class.
*/
public class DtoUserAuth {

  @NotNull
  @Size(min = 3, max = 30)
  @Getter
  private String username;

  @NotNull
  @Size(min = 3, max = 30)
  @Getter
  private String password;

  @Setter
  @Getter
  private String token;

  /**
  * Constructor.
  */
  public DtoUserAuth() {
  }
}
