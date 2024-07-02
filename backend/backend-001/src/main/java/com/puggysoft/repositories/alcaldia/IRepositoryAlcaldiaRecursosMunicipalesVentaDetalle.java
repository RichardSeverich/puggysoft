package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVentaDetalle;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle
    extends JpaRepository<EntityAlcaldiaRecursosMunicipalesVentaDetalle, Long> {

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales_venta_detalle;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alcaldia_recursos_municipales_venta_detalle LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesVentaDetalle> findAlcaldiaRecursosMunicipalesVentaDetalleByPagination(int off,
      int size);

  @Query(value = "SELECT * FROM alcaldia_recursos_municipales_venta_detalle "
      + "WHERE alcaldia_recursos_municipales_venta_detalle.id_venta = :idVenta"
      ,nativeQuery = true)
  EntityAlcaldiaRecursosMunicipalesVentaDetalle getVentaDetalleByIdVenta(
      @Param("idVenta") Integer idVenta);

  @Query(value = "SELECT alcaldia_recursos_municipales_venta_detalle.* "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "INNER JOIN alcaldia_recursos_municipales "
      + "ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
      + "WHERE alcaldia_recursos_municipales.id = :recursoMunicipalId "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta.id = :idVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant ", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesVentaDetalle> getVentasDeUnVenta(
      @Param("recursoMunicipalId") Long recursoMunicipalId,
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("idVenta") Long idVenta);
}
