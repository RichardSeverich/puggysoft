package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesFoldersVentaGetFilterSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesFoldersVentaGetFilterSize {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesFoldersVentaGetFilterSize serviceGetFilterSize;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-folders-ventas/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesVentaFilter dtoAlcaldiaRecursosMunicipalesVentaFilter,
      @PathVariable Long pageSize) {
    return serviceGetFilterSize.getSize(dtoAlcaldiaRecursosMunicipalesVentaFilter,
        pageSize);
  }
}