package com.puggysoft.controllers.users;

import com.puggysoft.services.users.ServiceUserGetPaginationSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerUserPaginationSize {

  @Autowired
  private ServiceUserGetPaginationSize serviceUserGetPaginationSize;

  @GetMapping(path = "/api/v1/users/pagination/size/{pageSize}")
  public ResponseEntity<Long> getSize(@PathVariable Long pageSize) {
    return serviceUserGetPaginationSize.getSize(pageSize);
  }
}