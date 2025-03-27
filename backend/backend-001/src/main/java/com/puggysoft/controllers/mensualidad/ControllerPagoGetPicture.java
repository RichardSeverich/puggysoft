package com.puggysoft.controllers.mensualidad;

import com.puggysoft.dtos.file.DtoFile;
import com.puggysoft.services.mensualidad.ServiceGetPagoPicture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerPagoGetPicture {

  @Autowired
  private ServiceGetPagoPicture servicePicture;

  // id is saleId
  @GetMapping(path = "/api/v1/file/picture")
  public ResponseEntity<DtoFile> post(@RequestParam Long id) {
    return servicePicture.getPicture(id);
  }
}
