package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesReportItem;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaRecursosMunicipalesReport
    extends JpaRepository<EntityAlcaldiaRecursosMunicipalesReportItem, Long> {
  @Query(value = "SELECT alcaldia_recursos_municipales_venta.id as numero_venta, "
      + "SUM(alcaldia_recursos_municipales_venta_detalle.precio_unidad * alcaldia_recursos_municipales_venta_detalle.cantidad) as ingreso_venta "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo = :codigoProducto "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant "
      + "AND DATE(alcaldia_recursos_municipales_venta_detalle.creation_date) = :fecha "
      + "GROUP BY alcaldia_recursos_municipales_venta.id", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesReportItem> getRevenueSummary(
      @Param("codigoProducto") String codigoProducto,
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("fecha") String date);

  @Query(value = "SELECT "
      + "SUM(alcaldia_recursos_municipales_venta_detalle.precio_unidad * alcaldia_recursos_municipales_venta_detalle.cantidad) "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo = :codigoProducto "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant "
      + "AND DATE(alcaldia_recursos_municipales_venta_detalle.creation_date) = :fecha ", nativeQuery = true)
  Double getRevenuePerProductTotal(
      @Param("codigoProducto") String codigoProducto,
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("fecha") String date);

  @Query(value = "SELECT "
      + "SUM(alcaldia_recursos_municipales_venta_detalle.precio_unidad * alcaldia_recursos_municipales_venta_detalle.cantidad) "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE  alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant "
      + "AND DATE(alcaldia_recursos_municipales_venta_detalle.creation_date) = :fecha ", nativeQuery = true)
  Double getRevenueTotal(
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("fecha") String date);

  // total anual de todos los recursos [activo||anulado]
  @Query(value = "SELECT "
      + "SUM(alcaldia_recursos_municipales_venta_detalle.precio_unidad * alcaldia_recursos_municipales_venta_detalle.cantidad) "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE  alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant "
      + "AND YEAR(alcaldia_recursos_municipales_venta_detalle.creation_date) = :year ", nativeQuery = true)
  Double getReporteTotalAnual(
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("year") String year);

  // total anual de un recurso [activo||anulado]
  @Query(value = "SELECT "
      + "SUM(alcaldia_recursos_municipales_venta_detalle.precio_unidad * alcaldia_recursos_municipales_venta_detalle.cantidad) "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo = :codigoProducto "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant "
      + "AND YEAR(alcaldia_recursos_municipales_venta_detalle.creation_date) = :year ", nativeQuery = true)
  Double getReportePorProductoTotalAnual(
      @Param("codigoProducto") String codigoProducto,
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("year") String year);

  // total mensual de un recurso [activo||anulado]
  @Query(value = "SELECT "
      + "SUM(alcaldia_recursos_municipales_venta_detalle.precio_unidad * alcaldia_recursos_municipales_venta_detalle.cantidad) "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta_detalle.recurso_municipal_codigo = :codigoProducto "
      + "AND alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant "
      + "AND YEAR(alcaldia_recursos_municipales_venta_detalle.creation_date) = :year "
      + "AND MONTH(alcaldia_recursos_municipales_venta_detalle.creation_date) = :month ", nativeQuery = true)
  Double getReportePorProductoTotalMensual(
      @Param("codigoProducto") String codigoProducto,
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("year") String year,
      @Param("month") Integer month);

  // total mensual de todos los recursos [activo||anulado]
  @Query(value = "SELECT "
      + "SUM(alcaldia_recursos_municipales_venta_detalle.precio_unidad * alcaldia_recursos_municipales_venta_detalle.cantidad) "
      + "FROM alcaldia_recursos_municipales_venta_detalle "
      + "INNER JOIN alcaldia_recursos_municipales_venta "
      + "ON alcaldia_recursos_municipales_venta.id=alcaldia_recursos_municipales_venta_detalle.id_venta "
      + "WHERE alcaldia_recursos_municipales_venta.venta_status = :estadoVenta "
      + "AND alcaldia_recursos_municipales_venta_detalle.tenant = :tenant "
      + "AND YEAR(alcaldia_recursos_municipales_venta_detalle.creation_date) = :year "
      + "AND MONTH(alcaldia_recursos_municipales_venta_detalle.creation_date) = :month ", nativeQuery = true)
  Double getReporteTotalMensual(
      @Param("estadoVenta") String estadoVenta,
      @Param("tenant") String tenant,
      @Param("year") String year,
      @Param("month") Integer month);

}
