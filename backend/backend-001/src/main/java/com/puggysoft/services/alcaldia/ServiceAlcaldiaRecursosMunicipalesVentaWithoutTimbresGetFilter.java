package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaFilter;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesVentaFilterBuilderNative;
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
public class ServiceAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilter {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVenta repositoryAlcaldiaRecursosMunicipalesVenta;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesVenta>> filter(
      DtoAlcaldiaRecursosMunicipalesVentaFilter dtoAlcaldiaRecursosMunicipalesVentaFilter, int page, int size) {

    String query = SqlAlcaldiaRecursosMunicipalesVentaFilterBuilderNative
        .build(dtoAlcaldiaRecursosMunicipalesVentaFilter);
    int off = page * size;
    List<EntityAlcaldiaRecursosMunicipalesVenta> listEntities;
    if (query.equals("")) {
      listEntities = repositoryAlcaldiaRecursosMunicipalesVenta.findAlcaldiaRecursosMunicipalesVentaByPagination(off,
          size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT DISTINCT alcaldia_recursos_municipales_venta.* FROM alcaldia_recursos_municipales_venta "
          + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
          + "INNER JOIN alcaldia_recursos_municipales ON alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal=alcaldia_recursos_municipales.id "
          + "WHERE alcaldia_recursos_municipales.name NOT LIKE \"%TIMBRES%\" AND "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaRecursosMunicipalesVenta.class);
      listEntities = (List<EntityAlcaldiaRecursosMunicipalesVenta>) filterQuery.getResultList();
    }
    List<DtoAlcaldiaRecursosMunicipalesVenta> listDtoAlcaldiaRecursosMunicipalesVenta = listEntities
        .stream()
        .map(DtoAlcaldiaRecursosMunicipalesVenta::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoAlcaldiaRecursosMunicipalesVenta);
  }

}