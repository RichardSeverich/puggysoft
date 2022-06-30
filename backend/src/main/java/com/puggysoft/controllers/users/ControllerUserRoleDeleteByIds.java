package com.puggysoft.controllers.users;

import com.puggysoft.services.users.ServiceUserRoleDeleteByIds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserRoleDeleteByIds {

  @Autowired
  private ServiceUserRoleDeleteByIds serviceUserRoleDeleteByIds;

  @DeleteMapping(path = "/api/v1/users-roles")
  public ResponseEntity<String> deleteByIds(
      @RequestParam Long idUser,
      @RequestParam Long idRole) {
    return serviceUserRoleDeleteByIds.deleteByIds(idUser, idRole);
  }
}