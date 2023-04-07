package com.puggysoft.controllers.reservations;

import com.puggysoft.dtos.reservations.DtoResResourceSchedule;
import com.puggysoft.services.reservations.ServiceResourceScheduleCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerResourceSchedulePost {

  @Autowired
  private ServiceResourceScheduleCreate serviceResourceScheduleCreate;

  @PostMapping(path = "/api/v1/reservations-resources-schedules")
  public ResponseEntity<String> post(@RequestBody @Valid DtoResResourceSchedule dtoResResourceSchedule) {
    return serviceResourceScheduleCreate.create(dtoResResourceSchedule);
  }
}
