package com.puggysoft.controllers.reservations;

import com.puggysoft.dtos.reservations.DtoResScheduleWorkDay;
import com.puggysoft.services.reservations.ServiceScheduleWorkDayCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerScheduleWorkDayPost {

  @Autowired
  private ServiceScheduleWorkDayCreate serviceScheduleWorkDayCreate;

  @PostMapping(path = "/api/v1/reservations-schedules-works-days")
  public ResponseEntity<String> post(@RequestBody @Valid DtoResScheduleWorkDay dtoResScheduleWorkDay) {
    return serviceScheduleWorkDayCreate.create(dtoResScheduleWorkDay);
  }
}
