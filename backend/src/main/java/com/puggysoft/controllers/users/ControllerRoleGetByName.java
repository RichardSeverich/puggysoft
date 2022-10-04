package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.services.users.ServiceRoleGetByName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerRoleGetByName {

  @Autowired
  private ServiceRoleGetByName serviceRoleGetByName;

  // /api/v1/role?roleName=doctor
  @GetMapping(path = "/api/v1/role")
  public ResponseEntity<DtoRole> getByName(@RequestParam String roleName) {
    return serviceRoleGetByName.getByName(roleName);
  }
}