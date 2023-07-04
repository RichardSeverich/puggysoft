package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipales;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesGetByVentasId {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursosMunicipales;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipales>> filter(Long ventasId, DtoAlcaldiaRecursosMunicipalesFilter dtoProductFilter) {

    String query = SqlAlcaldiaRecursosMunicipalesFilterBuilderNative.build(dtoProductFilter);
    List<EntityAlcaldiaRecursosMunicipales> listEntities;
    if (query.equals("")) {
      listEntities = repositoryAlcaldiaRecursosMunicipales.findAlcaldiaRecursosMunicipalesBelongToventas(ventasId);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT "
          + "alcaldia_recursos_municipales_venta_detalle.id, "
          + "alcaldia_recursos_municipales.codigo, "
          + "alcaldia_recursos_municipales_venta_detalle.cantidad, "
          + "alcaldia_recursos_municipales.name, "
          + "alcaldia_recursos_municipales_venta_detalle.precio_unidad as precio, "
          + "alcaldia_recursos_municipales_venta_detalle.tenant, "
          + "alcaldia_recursos_municipales_venta_detalle.created_by, "
          + "alcaldia_recursos_municipales_venta_detalle.creation_date, "
          + "alcaldia_recursos_municipales_venta_detalle.updated_by, "
          + "alcaldia_recursos_municipales_venta_detalle.update_date "
          + "FROM alcaldia_recursos_municipales "
          + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.codigo=alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo "
          + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
          + "WHERE alcaldia_recursos_municipales_venta.id = " + ventasId + " AND " + query;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaRecursosMunicipales.class);
      listEntities = (List<EntityAlcaldiaRecursosMunicipales>) filterQuery.getResultList();
    }
    List<DtoAlcaldiaRecursosMunicipales> listDtoAlcaldiaRecursosMunicipales = listEntities
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoAlcaldiaRecursosMunicipales);
  }

}
