package com.puggysoft.repositories.file;

import com.puggysoft.entities.file.EntityFile;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryFile extends JpaRepository<EntityFile, Long> {

  @Query(value = "SELECT * FROM app_files WHERE sis = ?1", nativeQuery = true)
  Optional<EntityFile> findFileBySale(Long saleId);
}