package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVenta;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaRecursosMunicipalesVentasReporte
    extends JpaRepository<EntityAlcaldiaRecursosMunicipalesVenta, Long> {

  // Detalle de ventas realizadas de un recurso en un determinado dia
  @Query(value = "SELECT "
      + "alcaldia_recursos_municipales_venta.id,"
      + "alcaldia_recursos_municipales_venta.numero_comprobante,"
      + "alcaldia_recursos_municipales_venta.cliente_nombre,"
      + "alcaldia_recursos_municipales_venta.cliente_ci_nit,"
      + "alcaldia_recursos_municipales_venta.direccion,"
      + "alcaldia_recursos_municipales_venta.nota,"
      + "alcaldia_recursos_municipales_venta.venta_status,"
      + "alcaldia_recursos_municipales_venta.venta_precio_total,"
      + "alcaldia_recursos_municipales_venta.cliente_dinero,"
      + "alcaldia_recursos_municipales_venta_detalle.precio_unidad AS cliente_cambio,"
      + "alcaldia_recursos_municipales_venta.glosa,"
      + "alcaldia_recursos_municipales_venta_detalle.cantidad AS aux,"
      + "alcaldia_recursos_municipales_venta.tenant,"
      + "alcaldia_recursos_municipales_venta.creation_date,"
      + "alcaldia_recursos_municipales_venta.update_date,"
      + "alcaldia_recursos_municipales_venta.created_by,"
      + "alcaldia_recursos_municipales_venta.updated_by "
      + "FROM alcaldia_recursos_municipales_venta "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "INNER JOIN alcaldia_recursos_municipales "
      + "ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
      + "WHERE alcaldia_recursos_municipales.name LIKE %:nameRecursoMunicipal% "
      + "AND alcaldia_recursos_municipales.id = :idRecursoMunicipal "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :status "
      + "AND alcaldia_recursos_municipales_venta.tenant = :tenant "
      + "AND DATE(alcaldia_recursos_municipales_venta.creation_date) = :yearMonthDay ", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesVenta> getDailyReport(
      @Param("nameRecursoMunicipal") String nameRecursoMunicipal,
      @Param("idRecursoMunicipal") Integer idRecursoMunicipal,
      @Param("status") String status,
      @Param("tenant") String tenant,
      @Param("yearMonthDay") String yearMonthDay);

  // Detalle de ventas realizadas de un recurso en un determinado mes
  @Query(value = "SELECT alcaldia_recursos_municipales_venta.*"
      + "FROM alcaldia_recursos_municipales_venta "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "INNER JOIN alcaldia_recursos_municipales "
      + "ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
      + "WHERE alcaldia_recursos_municipales.name LIKE %:nameRecursoMunicipal% "
      + "AND alcaldia_recursos_municipales.id = :idRecursoMunicipal "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :status "
      + "AND alcaldia_recursos_municipales_venta.tenant = :tenant "
      + "AND YEAR (alcaldia_recursos_municipales_venta.creation_date) = :year "
      + "AND MONTH (alcaldia_recursos_municipales_venta.creation_date) = :month ", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesVenta> getMonthReport(
      @Param("nameRecursoMunicipal") String nameRecursoMunicipal,
      @Param("idRecursoMunicipal") Integer idRecursoMunicipal,
      @Param("status") String status,
      @Param("tenant") String tenant,
      @Param("year") String year,
      @Param("month") String month);

  // Detalle de ventas realizadas de un recurso en un determinado año
  @Query(value = "SELECT alcaldia_recursos_municipales_venta.*"
      + "FROM alcaldia_recursos_municipales_venta "
      + "INNER JOIN alcaldia_recursos_municipales_venta_detalle "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "INNER JOIN alcaldia_recursos_municipales "
      + "ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_venta_detalle.id_recurso_municipal "
      + "WHERE alcaldia_recursos_municipales.name LIKE %:nameRecursoMunicipal% "
      + "AND alcaldia_recursos_municipales.id = :idRecursoMunicipal "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :status "
      + "AND alcaldia_recursos_municipales_venta.tenant = :tenant "
      + "AND YEAR (alcaldia_recursos_municipales_venta.creation_date) = :year ", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesVenta> getYearReport(
      @Param("nameRecursoMunicipal") String nameRecursoMunicipal,
      @Param("idRecursoMunicipal") Integer idRecursoMunicipal,
      @Param("status") String status,
      @Param("tenant") String tenant,
      @Param("year") String year);

}
