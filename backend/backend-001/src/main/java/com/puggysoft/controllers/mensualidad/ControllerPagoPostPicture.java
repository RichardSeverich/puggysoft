package com.puggysoft.controllers.mensualidad;

import com.puggysoft.services.mensualidad.ServicePagoPicture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ControllerPagoPostPicture {

  @Autowired
  private ServicePagoPicture servicePicture;

  // id is saleId
  @PostMapping(path = "/api/v1/file/picture")
  public ResponseEntity<String> post(@RequestParam("file") MultipartFile file,  @RequestParam Long id) {
    return servicePicture.setPicture(file, id);
  }
}
