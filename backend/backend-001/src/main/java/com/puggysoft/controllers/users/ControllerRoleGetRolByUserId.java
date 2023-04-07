package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.services.users.ServiceRoleGetByUserId;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRoleGetRolByUserId {

  @Autowired
  private ServiceRoleGetByUserId serviceRoleGetByUserId;

  @GetMapping(path = "/api/v1/roles/user-id/{userId}")
  public ResponseEntity<List<DtoRole>> getById(@PathVariable Long userId) {
    return serviceRoleGetByUserId.getById(userId);
  }

}