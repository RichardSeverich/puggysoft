package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.services.users.ServiceUserEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerUserPut {

  @Autowired
  private ServiceUserEditById serviceUserEditById;

  @PutMapping(path = "/api/v1/users/{id}")
  public ResponseEntity<String> put(@PathVariable Long id, @RequestBody @Valid DtoUser dtoUser) {
    return serviceUserEditById.editById(id, dtoUser);
  }
}