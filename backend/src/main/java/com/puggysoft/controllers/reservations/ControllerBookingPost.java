package com.puggysoft.controllers.reservations;

import com.puggysoft.dtos.reservations.DtoResBooking;
import com.puggysoft.services.reservations.ServiceBookingCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBookingPost {

  @Autowired
  private ServiceBookingCreate serviceBookingCreate;

  @PostMapping(path = "/api/v1/reservations-bookings")
  public ResponseEntity<String> post(@RequestBody @Valid DtoResBooking dtoResBooking) {
    return serviceBookingCreate.create(dtoResBooking);
  }
}
