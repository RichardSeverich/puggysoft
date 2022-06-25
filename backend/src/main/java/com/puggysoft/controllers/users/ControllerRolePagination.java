package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.services.users.ServiceRoleGetPagination;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRolePagination {

  @Autowired
  private ServiceRoleGetPagination serviceRoleGetPagination;

  @GetMapping(path = "/api/v1/roles/pagination")
  public ResponseEntity<List<DtoRole>> getPagination(Pageable pageable) {
    return serviceRoleGetPagination.getPagination(pageable);
  }
}
