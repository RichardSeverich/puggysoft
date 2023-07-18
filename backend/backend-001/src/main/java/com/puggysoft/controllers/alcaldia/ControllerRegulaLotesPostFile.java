package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceRegulaLotesPostFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ControllerRegulaLotesPostFile {

  @Autowired
  private ServiceRegulaLotesPostFile serviceRegulaLotesPostFile;

  // id is product
  @PostMapping(path = "/api/v1/regula-lotes/file")
  public ResponseEntity<String> post(@RequestParam("file") MultipartFile file,  @RequestParam Long id) {
    return serviceRegulaLotesPostFile.setPicture(file, id);
  }
}
