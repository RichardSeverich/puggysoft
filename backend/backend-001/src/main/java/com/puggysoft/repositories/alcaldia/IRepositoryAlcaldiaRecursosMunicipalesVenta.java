package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVenta;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaRecursosMunicipalesVenta
    extends JpaRepository<EntityAlcaldiaRecursosMunicipalesVenta, Long> {

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales_venta;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alcaldia_recursos_municipales_venta LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesVenta> findAlcaldiaRecursosMunicipalesVentaByPagination(int off, int size);

  @Query(value = "SELECT DISTINCT * FROM alcaldia_recursos_municipales_venta "
  + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
  + "INNER JOIN alcaldia_recursos_municipales ON alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal=alcaldia_recursos_municipales.id "
  + "WHERE alcaldia_recursos_municipales.name LIKE \"%TIMBRES%\" LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesVenta> findAlcaldiaRecursosMunicipalesTimbresVentaByPagination(int off, int size);

  @Query(value = "SELECT COUNT(DISTINCT alcaldia_recursos_municipales_venta.id) FROM alcaldia_recursos_municipales_venta "
  + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
  + "INNER JOIN alcaldia_recursos_municipales ON alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal=alcaldia_recursos_municipales.id "
  + "WHERE alcaldia_recursos_municipales.name LIKE \"%TIMBRES%\"", nativeQuery = true)
  Long findSizeTimbres();
}