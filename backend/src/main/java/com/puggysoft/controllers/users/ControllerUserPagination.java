package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.services.users.ServiceUserGetPagination;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUserPagination {

  @Autowired
  private ServiceUserGetPagination serviceUserGetPagination;

  @GetMapping(path = "/api/v1/users/pagination")
  public ResponseEntity<List<DtoUser>> getPagination(Pageable pageable) {
    return serviceUserGetPagination.getPagination(pageable);
  }
}
