package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.services.users.ServiceRoleGetAll;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerRoleGetAll {

  @Autowired
  private ServiceRoleGetAll serviceRoleGetAll;

  @GetMapping(path = "/api/v1/roles")
  public ResponseEntity<List<DtoRole>> getAll() {
    return serviceRoleGetAll.getAll();
  }
}