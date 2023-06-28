package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityUrbanismoTramite;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryUrbanismoTramite extends JpaRepository<EntityUrbanismoTramite, Long> {

  @Query(value = "SELECT COUNT(*) FROM alc_urb_tramite;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alc_urb_tramite LIMIT ?1, ?2", nativeQuery = true)
  List<EntityUrbanismoTramite> findUrbanismoTramiteByPagination(int off, int size);

}