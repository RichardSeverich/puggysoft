package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipales;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaRecursosMunicipales extends JpaRepository<EntityAlcaldiaRecursosMunicipales, Long> {

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alcaldia_recursos_municipales LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesByPagination(int off, int size);

  @Query(value = "SELECT "
      + "alcaldia_recursos_municipales_venta_detalle.id, "
      + "alcaldia_recursos_municipales.codigo, "
      + "alcaldia_recursos_municipales_venta_detalle.cantidad, "
      + "alcaldia_recursos_municipales.name, "
      + "alcaldia_recursos_municipales.precio, "
      + "alcaldia_recursos_municipales_venta_detalle.tenant, "
      + "alcaldia_recursos_municipales_venta_detalle.created_by, "
      + "alcaldia_recursos_municipales_venta_detalle.creation_date, "
      + "alcaldia_recursos_municipales_venta_detalle.updated_by, "
      + "alcaldia_recursos_municipales_venta_detalle.update_date "
      + "FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.codigo=alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo "
      + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta.id = ?3 LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesBelongToventasByPagination(int off, int size,
      Long ventasId);

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.codigo=alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo "
      + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta.id = ?1", nativeQuery = true)
  Long findSizeAlcaldiaRecursosMunicipalesBelongToventas(Long ventasId);

  @Query(value = "SELECT "
      + "alcaldia_recursos_municipales_venta_detalle.id, "
      + "alcaldia_recursos_municipales.codigo, "
      + "alcaldia_recursos_municipales_venta_detalle.cantidad, "
      + "alcaldia_recursos_municipales.name, "
      + "alcaldia_recursos_municipales.precio, "
      + "alcaldia_recursos_municipales_venta_detalle.tenant, "
      + "alcaldia_recursos_municipales_venta_detalle.created_by, "
      + "alcaldia_recursos_municipales_venta_detalle.creation_date, "
      + "alcaldia_recursos_municipales_venta_detalle.updated_by, "
      + "alcaldia_recursos_municipales_venta_detalle.update_date "
      + "FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.codigo=alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo "
      + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta.id = ?3", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesBelongToventas(Long ventasId);
}