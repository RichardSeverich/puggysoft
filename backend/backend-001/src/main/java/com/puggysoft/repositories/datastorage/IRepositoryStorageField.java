package com.puggysoft.repositories.datastorage;

import com.puggysoft.entities.datastorage.EntityStorageField;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryStorageField extends JpaRepository<EntityStorageField, Long> {

  @Query(value = "SELECT COUNT(*) FROM storage_field;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM storage_field LIMIT ?1, ?2", nativeQuery = true)
  List<EntityStorageField> findStorageFieldByPagination(int off, int size);

  @Query(value = "SELECT storage_field.* FROM storage_field "
      + "INNER JOIN storage_schema_field ON storage_schema_field.field = storage_field.short_name "
      + "WHERE storage_schema_field.schema_ = ?1", nativeQuery = true)
  List<EntityStorageField> findFieldsBySchema(String schemaShortName);

}