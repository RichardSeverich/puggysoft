package com.puggysoft.controllers.reservations;

import com.puggysoft.dtos.reservations.DtoResIntervalTime;
import com.puggysoft.services.reservations.ServiceIntervalTimeCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerIntervalTimePost {

  @Autowired
  private ServiceIntervalTimeCreate serviceIntervalTimeCreate;

  @PostMapping(path = "/api/v1/reservations-intervals-times")
  public ResponseEntity<String> post(@RequestBody @Valid DtoResIntervalTime dtoResIntervalTime) {
    return serviceIntervalTimeCreate.create(dtoResIntervalTime);
  }
}
