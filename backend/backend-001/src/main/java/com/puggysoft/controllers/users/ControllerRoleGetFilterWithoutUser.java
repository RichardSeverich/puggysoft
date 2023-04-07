package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.dtos.users.DtoRoleFilter;
import com.puggysoft.services.users.ServiceRoleGetFilterWithoutUser;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRoleGetFilterWithoutUser {

  @Autowired
  private ServiceRoleGetFilterWithoutUser serviceRoleGetFilterWithoutUser;

  @PostMapping(path = "/api/v1/roles/filter/without-users")
  public ResponseEntity<List<DtoRole>> getRoles(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoRoleFilter dtoRoleFilter,
      @RequestParam Long idUser) {
    return serviceRoleGetFilterWithoutUser.filter(dtoRoleFilter, page, size, idUser);
  }
}
