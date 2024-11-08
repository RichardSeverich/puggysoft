package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServiceProductGroupPicture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ControllerProductGroupsPostPicture {

  @Autowired
  private ServiceProductGroupPicture servicePicture;

  // id is product
  @PostMapping(path = "/api/v1/product-groups/picture")
  public ResponseEntity<String> post(@RequestParam("file") MultipartFile file,  @RequestParam Long id) {
    return servicePicture.setPicture(file, id);
  }
}
