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

  @Query(value = "SELECT * FROM alcaldia_recursos_municipales WHERE name NOT LIKE \"%TIMBRES%\" LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesOutTimbresByPagination(int off, int size);

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales WHERE name NOT LIKE \"%TIMBRES%\";", nativeQuery = true)
  Long findSizeOutTimbres();

  @Query(value = "SELECT "
      + "alcaldia_recursos_municipales_venta_detalle.id, "
      + "alcaldia_recursos_municipales.codigo, "
      + "alcaldia_recursos_municipales.codigo_auxiliar, "
      + "alcaldia_recursos_municipales_venta_detalle.cantidad, "
      + "alcaldia_recursos_municipales.name, "
      + "alcaldia_recursos_municipales.precio, "
      + "alcaldia_recursos_municipales.talonario_movimiento, "
      + "alcaldia_recursos_municipales.talonario_inicio, "
      + "alcaldia_recursos_municipales.talonario_final, "
      + "alcaldia_recursos_municipales.tipo, "
      + "alcaldia_recursos_municipales_venta_detalle.tenant, "
      + "alcaldia_recursos_municipales_venta_detalle.created_by, "
      + "alcaldia_recursos_municipales_venta_detalle.creation_date, "
      + "alcaldia_recursos_municipales_venta_detalle.updated_by, "
      + "alcaldia_recursos_municipales_venta_detalle.update_date "
      + "FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
      + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta.id = ?3 LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesBelongToventasByPagination(int off, int size,
      Long ventasId);

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
      + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta.id = ?1", nativeQuery = true)
  Long findSizeAlcaldiaRecursosMunicipalesBelongToventas(Long ventasId);

  @Query(value = "SELECT "
      + "alcaldia_recursos_municipales_venta_detalle.id, "
      + "alcaldia_recursos_municipales.codigo, "
      + "alcaldia_recursos_municipales.codigo_auxiliar, "
      + "alcaldia_recursos_municipales_venta_detalle.cantidad, "
      + "alcaldia_recursos_municipales.name, "
      + "alcaldia_recursos_municipales.precio, "
      + "alcaldia_recursos_municipales.talonario_movimiento, "
      + "alcaldia_recursos_municipales.talonario_inicio, "
      + "alcaldia_recursos_municipales.talonario_final, "
      + "alcaldia_recursos_municipales.tipo, "
      + "alcaldia_recursos_municipales_venta_detalle.tenant, "
      + "alcaldia_recursos_municipales_venta_detalle.created_by, "
      + "alcaldia_recursos_municipales_venta_detalle.creation_date, "
      + "alcaldia_recursos_municipales_venta_detalle.updated_by, "
      + "alcaldia_recursos_municipales_venta_detalle.update_date "
      + "FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
      + "INNER JOIN alcaldia_recursos_municipales_venta ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta.id = ?1", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesBelongToventas(Long ventasId);

  @Query(value = "SELECT alcaldia_recursos_municipales_grupo.id AS id, "
      + "alcaldia_recursos_municipales.codigo, "
      + "alcaldia_recursos_municipales.codigo_auxiliar, "
      + "alcaldia_recursos_municipales.name, "
      + "alcaldia_recursos_municipales.precio, "
      + "alcaldia_recursos_municipales.tipo, "
      + "alcaldia_recursos_municipales.tenant, "
      + "alcaldia_recursos_municipales.talonario_movimiento, "
      + "alcaldia_recursos_municipales.talonario_inicio, "
      + "alcaldia_recursos_municipales.talonario_final, "
      + "alcaldia_recursos_municipales.creation_date, "
      + "alcaldia_recursos_municipales.update_date, "
      + "alcaldia_recursos_municipales.created_by, "
      + "alcaldia_recursos_municipales.updated_by "
      + "FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_grupo ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_grupo.id_recurso_municipal_hijo "
      + "WHERE alcaldia_recursos_municipales_grupo.id_recurso_municipal_padre = ?3 LIMIT ?1, ?2", nativeQuery = true)
      List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesHijoByPadreId(int off, int size, Long idPadre);

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_grupo ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_grupo.id_recurso_municipal_hijo "
      + "WHERE alcaldia_recursos_municipales_grupo.id_recurso_municipal_padre = ?1", nativeQuery = true)
  Long findSizeAlcaldiaRecursosMunicipalesHijoByPadreId(Long idPadre);

  @Query(value = "SELECT DISTINCT alcaldia_recursos_municipales.* FROM alcaldia_recursos_municipales "
      + "WHERE alcaldia_recursos_municipales.tipo = \"HIJO\" AND "
      + "alcaldia_recursos_municipales.id NOT IN (SELECT alcaldia_recursos_municipales.id FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_grupo ON alcaldia_recursos_municipales.id = alcaldia_recursos_municipales_grupo.id_recurso_municipal_hijo "
      + "WHERE alcaldia_recursos_municipales_grupo.id_recurso_municipal_padre = ?3) LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipales> findAlcaldiaRecursosMunicipalesHijoNotByPadreId(int off, int size, Long idPadre);

  @Query(value = "SELECT DISTINCT COUNT(*) FROM alcaldia_recursos_municipales "
      + "WHERE alcaldia_recursos_municipales.tipo = \"HIJO\" AND "
      + "alcaldia_recursos_municipales.id NOT IN (SELECT alcaldia_recursos_municipales.id FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_grupo ON alcaldia_recursos_municipales.id = alcaldia_recursos_municipales_grupo.id_recurso_municipal_hijo "
      + "WHERE alcaldia_recursos_municipales_grupo.id_recurso_municipal_padre = ?1)", nativeQuery = true)
  Long findSizeAlcaldiaRecursosMunicipalesHijoNotByPadreId(Long idPadre);
}
