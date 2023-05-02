package com.puggysoft.repositories.facturacion;

import com.puggysoft.entities.facturacion.EntityBill;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryBill extends JpaRepository<EntityBill, Long> {

  @Query(value = "SELECT COUNT(*) FROM fac_factura;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM fac_factura LIMIT ?1, ?2", nativeQuery = true)
  List<EntityBill> findBillByPagination(int off, int size);

}