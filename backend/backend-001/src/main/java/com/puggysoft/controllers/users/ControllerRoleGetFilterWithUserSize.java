package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRoleFilter;
import com.puggysoft.services.users.ServiceRoleGetFilterWithUserSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerRoleGetFilterWithUserSize {

  @Autowired
  private ServiceRoleGetFilterWithUserSize serviceRoleGetFilterWithUserSize;

  @PostMapping(path = "/api/v1/roles/filter/with-users/size")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoRoleFilter dtoRoleFilter,
      @RequestParam Long pageSize,
      @RequestParam Long idUser) {
    return serviceRoleGetFilterWithUserSize.getSize(dtoRoleFilter, pageSize, idUser);
  }

}
