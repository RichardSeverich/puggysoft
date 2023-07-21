package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityUrbanismoTramiteRequisitos;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryUrbanismoTramiteRequisitos extends JpaRepository<EntityUrbanismoTramiteRequisitos, Long> {

  @Query(value = "SELECT COUNT(*) FROM alc_urb_tramite_requisitos;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alc_urb_tramite_requisitos LIMIT ?1, ?2", nativeQuery = true)
  List<EntityUrbanismoTramiteRequisitos> findUrbanismoTramiteRequisitosByPagination(int off, int size);

  @Query(value = "SELECT * FROM alc_urb_tramite_requisitos WHERE tramite_nombre_corto = :tramite", nativeQuery = true)
  List<EntityUrbanismoTramiteRequisitos> findUrbanismoTramiteRequisitosByTramite(@Param("tramite") String tramite);
}