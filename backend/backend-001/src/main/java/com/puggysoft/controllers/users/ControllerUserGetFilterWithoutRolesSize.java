package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.services.users.ServiceUserGetFilterWithoutRoleSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerUserGetFilterWithoutRolesSize {

  @Autowired
  private ServiceUserGetFilterWithoutRoleSize serviceUserGetFilterWithoutRoleSize;

  @PostMapping(path = "/api/v1/users/filter/without-roles/size")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoUserFilter dtoUserFilter,
      @RequestParam Long pageSize,
      @RequestParam Long idRole) {
    return serviceUserGetFilterWithoutRoleSize.getSize(dtoUserFilter, pageSize, idRole);
  }

}
