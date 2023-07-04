package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesGetByVentasId;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesGetByVentasId {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesGetByVentasId serviceAlcaldiaRecursosMunicipalesGet;

  @PostMapping(path = "/api/v1/alcaldia/filter-by-ventas-id")
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipales>> getAlcaldiaRecursosMunicipales(
      @RequestParam Long ventasId,
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesFilter dtoAlcaldiaRecursosMunicipales) {
    return serviceAlcaldiaRecursosMunicipalesGet.filter(ventasId, dtoAlcaldiaRecursosMunicipales);
  }
}
