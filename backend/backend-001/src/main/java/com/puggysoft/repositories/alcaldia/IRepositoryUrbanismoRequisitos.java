package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityUrbanismoRequisitos;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryUrbanismoRequisitos extends JpaRepository<EntityUrbanismoRequisitos, Long> {

  @Query(value = "SELECT COUNT(*) FROM alc_urb_requisitos;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alc_urb_requisitos LIMIT ?1, ?2", nativeQuery = true)
  List<EntityUrbanismoRequisitos> findUrbanismoRequisitosByPagination(int off, int size);

  // GET ALL REQUISITOS THAT ARE NOT PART OF A TRAMITE
  @Query(value = "SELECT alc_urb_requisitos.* "
          + "FROM alc_urb_requisitos "
          + "WHERE alc_urb_requisitos.nombre_corto "
          + "NOT IN ("
          + "SELECT alc_urb_tramite_requisitos.requisito_nombre_corto "
          + "FROM alc_urb_tramite_requisitos "
          + "WHERE alc_urb_tramite_requisitos.tramite_nombre_corto = ?1) "
          + "LIMIT ?2, ?3", nativeQuery = true)
  List<EntityUrbanismoRequisitos> findRequisitosWithoutTramites(String tramite, int off, int size);

  // GET COUNT REQUISITOS THAT ARE not PART OF A TRAMITE
  @Query(value = "SELECT COUNT(*) "
          + "FROM alc_urb_requisitos "
          + "WHERE alc_urb_requisitos.nombre_corto "
          + "NOT IN ("
          + "SELECT alc_urb_tramite_requisitos.requisito_nombre_corto "
          + "FROM alc_urb_tramite_requisitos "
          + "WHERE alc_urb_tramite_requisitos.tramite_nombre_corto = ?1)", nativeQuery = true)
  Long findSizeWithoutTramites(String tramite);

  // GET ALL REQUISITOS THAT ARE PART OF A TRAMITE
  @Query(value = "SELECT alc_urb_tramite_requisitos.id, alc_urb_requisitos.* FROM alc_urb_requisitos "
          + "INNER JOIN alc_urb_tramite_requisitos ON "
          + "alc_urb_tramite_requisitos.requisito_nombre_corto=alc_urb_requisitos.nombre_corto "
          + "WHERE alc_urb_tramite_requisitos.tramite_nombre_corto = ?1 "
          + "LIMIT ?2, ?3 ", nativeQuery = true)
  List<EntityUrbanismoRequisitos> findRequisitosWithTramites(String tramite, int off, int size);

  // GET COUNT REQUISITOS THAT ARE PART OF A TRAMITE
  @Query(value = "SELECT COUNT(*) "
          + "FROM alc_urb_requisitos "
          + "INNER JOIN alc_urb_tramite_requisitos ON "
          + "alc_urb_tramite_requisitos.requisito_nombre_corto=alc_urb_requisitos.nombre_corto "
          + "WHERE alc_urb_tramite_requisitos.tramite_nombre_corto = ?1 ", nativeQuery = true)
  Long findSizeWithTramites(String tramite);

}