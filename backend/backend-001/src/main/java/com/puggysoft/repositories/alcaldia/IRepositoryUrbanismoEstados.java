package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityUrbanismoEstados;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryUrbanismoEstados extends JpaRepository<EntityUrbanismoEstados, Long> {

  @Query(value = "SELECT COUNT(*) FROM alc_urb_estados;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alc_urb_estados LIMIT ?1, ?2", nativeQuery = true)
  List<EntityUrbanismoEstados> findUrbanismoEstadosByPagination(int off, int size);

// GET ALL estados THAT ARE NOT PART OF A TRAMITE
  @Query(value = "SELECT alc_urb_estados.* "
          + "FROM alc_urb_estados "
          + "WHERE alc_urb_estados.nombre_corto "
          + "NOT IN ("
          + "SELECT alc_urb_tramite_flujo.estado_nombre_corto "
          + "FROM alc_urb_tramite_flujo "
          + "WHERE alc_urb_tramite_flujo.tramite_nombre_corto = ?1) "
          + "LIMIT ?2, ?3", nativeQuery = true)
  List<EntityUrbanismoEstados> findEstadosWithoutTramites(String tramite, int off, int size);

  // GET COUNT Estados THAT ARE not PART OF A TRAMITE
  @Query(value = "SELECT COUNT(*) "
          + "FROM alc_urb_estados "
          + "WHERE alc_urb_estados.nombre_corto "
          + "NOT IN ("
          + "SELECT alc_urb_tramite_flujo.estado_nombre_corto "
          + "FROM alc_urb_tramite_flujo "
          + "WHERE alc_urb_tramite_flujo.tramite_nombre_corto = ?1)", nativeQuery = true)
  Long findSizeWithoutTramites(String tramite);

  // GET ALL estados THAT ARE PART OF A TRAMITE
  @Query(value = "SELECT alc_urb_tramite_flujo.id, alc_urb_estados.* FROM alc_urb_estados "
          + "INNER JOIN alc_urb_tramite_flujo ON "
          + "alc_urb_tramite_flujo.estado_nombre_corto=alc_urb_estados.nombre_corto "
          + "WHERE alc_urb_tramite_flujo.tramite_nombre_corto = ?1 "
          + "LIMIT ?2, ?3 ", nativeQuery = true)
  List<EntityUrbanismoEstados> findEstadosWithTramites(String tramite, int off, int size);

  // GET COUNT Estados THAT ARE PART OF A TRAMITE
  @Query(value = "SELECT COUNT(*) "
          + "FROM alc_urb_estados "
          + "INNER JOIN alc_urb_tramite_flujo ON "
          + "alc_urb_tramite_flujo.estado_nombre_corto=alc_urb_estados.nombre_corto "
          + "WHERE alc_urb_tramite_flujo.tramite_nombre_corto = ?1 ", nativeQuery = true)
  Long findSizeWithTramites(String tramite);


}