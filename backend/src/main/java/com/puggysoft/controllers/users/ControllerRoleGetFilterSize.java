package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRoleFilter;
import com.puggysoft.services.users.ServiceRoleGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerRoleGetFilterSize {

  @Autowired
  private ServiceRoleGetFilterSize serviceRoleGetFilterSize;

  @PostMapping(path = "/api/v1/roles/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoRoleFilter dtoRoleFilter, @PathVariable Long pageSize) {
    return serviceRoleGetFilterSize.getSize(dtoRoleFilter, pageSize);
  }

}
