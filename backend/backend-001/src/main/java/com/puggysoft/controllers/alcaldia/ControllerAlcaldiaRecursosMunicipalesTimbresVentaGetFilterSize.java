package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesTimbresVentaGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesTimbresVentaGetFilterSize {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesTimbresVentaGetFilterSize serviceAlcaldiaRecursosMunicipalesTimbresVentaGetFilterSize;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-timbres-ventas/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesVentaFilter dtoAlcaldiaRecursosMunicipalesVentaFilter,
      @PathVariable Long pageSize) {
    return serviceAlcaldiaRecursosMunicipalesTimbresVentaGetFilterSize.getSize(dtoAlcaldiaRecursosMunicipalesVentaFilter,
        pageSize);
  }
}