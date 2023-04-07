package com.puggysoft.controllers.reservations;

import com.puggysoft.dtos.reservations.DtoResScheduleIntervalTime;
import com.puggysoft.services.reservations.ServiceScheduleIntervalTimeCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerScheduleIntervalTimePost {

  @Autowired
  private ServiceScheduleIntervalTimeCreate serviceScheduleIntervalTimeCreate;

  @PostMapping(path = "/api/v1/reservations-schedules-intervals-times")
  public ResponseEntity<String> post(@RequestBody @Valid DtoResScheduleIntervalTime dtoResScheduleIntervalTime) {
    return serviceScheduleIntervalTimeCreate.create(dtoResScheduleIntervalTime);
  }
}
