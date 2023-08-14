package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipales;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle;
import java.lang.String;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesVentaDetalleGroupCreate {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle repositoryAlcaldiaRecursosMunicipalesVentaDetalle;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVenta repositoryAlcaldiaRecursosMunicipalesVenta;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<String> create (DtoAlcaldiaRecursosMunicipalesVentaDetalle dto) {

    String fullQuery = "SELECT alcaldia_recursos_municipales.* "
    + "FROM alcaldia_recursos_municipales "
    + "INNER JOIN alcaldia_recursos_municipales_grupo ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_grupo.id_recurso_municipal_hijo "
    + "WHERE alcaldia_recursos_municipales_grupo.id_recurso_municipal_padre = " + dto.getIdRecursoMunicipal();
    Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaRecursosMunicipales.class);

    try {
      List<DtoAlcaldiaRecursosMunicipales> listDto = ((List<EntityAlcaldiaRecursosMunicipales>) filterQuery.getResultList())
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());

        Optional<EntityAlcaldiaRecursosMunicipalesVenta> optionalEntity = repositoryAlcaldiaRecursosMunicipalesVenta
        .findById(Long.parseLong(dto.getIdVenta()));
        DtoAlcaldiaRecursosMunicipalesVenta dtoControl = DtoAlcaldiaRecursosMunicipalesVenta
          .entityToDto(optionalEntity.get());
        
        for (DtoAlcaldiaRecursosMunicipales producto : listDto) {
          DtoAlcaldiaRecursosMunicipalesVentaDetalle dtoCreate= new DtoAlcaldiaRecursosMunicipalesVentaDetalle();
          dtoCreate.setIdVenta(dto.getIdVenta());
          dtoCreate.setIdRecursoMunicipal(String.valueOf(producto.getId()));
          dtoCreate.setCantidad("1");
          dtoCreate.setCreatedBy(dto.getCreatedBy());
          dtoCreate.setTenant(dto.getTenant());
          dtoCreate.setPrecioUnidad(producto.getPrecio());
          repositoryAlcaldiaRecursosMunicipalesVentaDetalle
            .save(dtoCreate.dtoToEntity());
          Double actual = Double.parseDouble(dtoControl.getVentaPrecioTotal());
          Double add = Double.parseDouble(producto.getPrecio());
          dtoControl.setVentaPrecioTotal(String.valueOf(actual + add));
        }
        dtoControl.setId(Long.parseLong(dto.getIdVenta()));
        repositoryAlcaldiaRecursosMunicipalesVenta.save(dtoControl.dtoToEntity());

        return ResponseEntity.status(HttpStatus.CREATED).body(dtoControl.getVentaPrecioTotal());
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }

}