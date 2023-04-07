package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.services.users.ServiceRoleGetByUsername;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRoleGetRolByUsername {

  @Autowired
  private ServiceRoleGetByUsername serviceRoleGetByUsername;

  @GetMapping(path = "/api/v1/roles/user-username/{username}")
  public ResponseEntity<List<DtoRole>> getByUsername(@PathVariable String username) {
    return serviceRoleGetByUsername.getByUsername(username);
  }

}