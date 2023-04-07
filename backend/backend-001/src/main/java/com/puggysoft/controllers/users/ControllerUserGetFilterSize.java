package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.services.users.ServiceUserGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerUserGetFilterSize {

  @Autowired
  private ServiceUserGetFilterSize serviceUserGetFilterSize;

  @PostMapping(path = "/api/v1/users/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoUserFilter dtoUserFilter, @PathVariable Long pageSize) {
    return serviceUserGetFilterSize.getSize(dtoUserFilter, pageSize);
  }

}
