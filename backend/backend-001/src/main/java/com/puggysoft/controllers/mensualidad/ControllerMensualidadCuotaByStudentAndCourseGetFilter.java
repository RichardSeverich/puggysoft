package com.puggysoft.controllers.mensualidad;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.services.mensualidad.ServiceMensualidadCuotaByStudentAndCourseGetFilter;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerMensualidadCuotaByStudentAndCourseGetFilter {

  @Autowired
  private ServiceMensualidadCuotaByStudentAndCourseGetFilter service;

  @PostMapping(path = "/api/v1/mensualidad-cuota-by-student-and-course/filter")
  public ResponseEntity<List<DtoProduct>> getFilter(
      @RequestParam String studentUsername,
      @RequestParam Long courseId,
      @RequestBody @Valid DtoProductFilter dtoFilter,
      @RequestParam int page,
      @RequestParam int size
  ) {
    return service.filter(studentUsername, courseId, dtoFilter, page, size);
  }
}
