package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceProductPicture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ControllerProductPostPicture {

  @Autowired
  private ServiceProductPicture serviceProductPicture;

  // id is product
  @PostMapping(path = "/api/v1/products/picture")
  public ResponseEntity<String> post(@RequestParam("file") MultipartFile file,  @RequestParam Long id) {
    return serviceProductPicture.setPicture(file, id);
  }
}
