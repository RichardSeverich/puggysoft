package com.puggysoft.controllers.users;

import com.puggysoft.services.users.ServiceRoleGetPaginationSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerRolePaginationSize {

  @Autowired
  private ServiceRoleGetPaginationSize serviceRoleGetPaginationSize;

  @GetMapping(path = "/api/v1/roles/pagination/size/{pageSize}")
  public ResponseEntity<Long> getSize(@PathVariable Long pageSize) {
    return serviceRoleGetPaginationSize.getSize(pageSize);
  }
}