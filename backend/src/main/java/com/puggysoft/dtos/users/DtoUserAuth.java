package com.complejo.models;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

//import lombok.Getter;
//import lombok.Setter;

/**
* Class.
*/
public class DtoUserAuth {

  @NotNull
  @Size(min = 3, max = 10)
  private String username;

  @NotNull
  @Size(min = 3, max = 10)
  private String password;

  private String token;

  /**
  * Constructor.
  */
  public UserAuth() {
  }
}
