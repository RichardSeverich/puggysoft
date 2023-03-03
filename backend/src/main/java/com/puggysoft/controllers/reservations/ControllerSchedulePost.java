package com.puggysoft.controllers.reservations;

import com.puggysoft.dtos.reservations.DtoResSchedule;
import com.puggysoft.services.reservations.ServiceScheduleCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSchedulePost {

  @Autowired
  private ServiceScheduleCreate serviceScheduleCreate;

  @PostMapping(path = "/api/v1/reservations-schedules")
  public ResponseEntity<String> post(@RequestBody @Valid DtoResSchedule dtoResSchedule) {
    return serviceScheduleCreate.create(dtoResSchedule);
  }
}
