package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityRegulaLotes;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryRegulaLotes extends JpaRepository<EntityRegulaLotes, Long> {

  @Query(value = "SELECT COUNT(*) FROM alc_reg_lotes;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alc_reg_lotes LIMIT ?1, ?2", nativeQuery = true)
  List<EntityRegulaLotes> findRegulaLotesByPagination(int off, int size);

}