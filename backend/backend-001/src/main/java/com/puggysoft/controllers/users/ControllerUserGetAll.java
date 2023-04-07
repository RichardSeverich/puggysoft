package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.services.users.ServiceUserGetAll;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerUserGetAll {

  @Autowired
  private ServiceUserGetAll serviceUserGetAll;

  @GetMapping(path = "/api/v1/users")
  public ResponseEntity<List<DtoUser>> getAll() {
    return serviceUserGetAll.getAll();
  }
}