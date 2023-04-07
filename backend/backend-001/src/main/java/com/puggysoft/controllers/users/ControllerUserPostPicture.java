package com.puggysoft.controllers.users;

import com.puggysoft.services.users.ServiceUserPicture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ControllerUserPostPicture {

  @Autowired
  private ServiceUserPicture serviceUserPicture;

  // id is userId
  @PostMapping(path = "/api/v1/users/picture")
  public ResponseEntity<String> post(@RequestParam("file") MultipartFile file,  @RequestParam Long id) {
    return serviceUserPicture.setPicture(file, id);
  }
}
