package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceAlcaldiaActividadesDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaActividadesDeleteById {

  @Autowired
  private ServiceAlcaldiaActividadesDeleteById sevice;

  @DeleteMapping(path = "/api/v1/alcaldia-actividades/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return sevice.deleteById(id);
  }
}