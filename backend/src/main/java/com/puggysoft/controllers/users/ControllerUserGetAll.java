package com.yeshua.controllers.users;

import com.yeshua.dtos.users.DtoUser;
import com.yeshua.services.users.ServiceUserGetAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ControllerUserGet {

  @Autowired
  private ServiceUserGetAll service;

  @GetMapping(path = "/api/v1/users")
  public ResponseEntity<List<DtoUser>> getAll() {
    return service.getAll();
  }
}