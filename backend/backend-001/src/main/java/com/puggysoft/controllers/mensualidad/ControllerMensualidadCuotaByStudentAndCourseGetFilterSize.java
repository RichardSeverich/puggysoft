package com.puggysoft.controllers.mensualidad;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.mensualidad.ServiceMensualidadCuotaByStudentAndCourseGetFilterSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
public class ControllerMensualidadCuotaByStudentAndCourseGetFilterSize {

  @Autowired
  private ServiceMensualidadCuotaByStudentAndCourseGetFilterSize service;

  @PostMapping(path = "/api/v1/mensualidad-cuota-by-student-and-course/filter/size")
  public ResponseEntity<Long> getFilterSize(
      @RequestParam String studentUsername,
      @RequestParam Long courseId,
      @RequestBody @Valid DtoProductFilter dtoFilter,
      @RequestParam Long pageSize
  ) {
    return service.filter(studentUsername, courseId, dtoFilter, pageSize);
  }
}
