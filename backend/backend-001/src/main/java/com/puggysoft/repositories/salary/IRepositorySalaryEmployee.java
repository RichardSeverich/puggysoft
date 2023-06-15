package com.puggysoft.repositories.salary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.puggysoft.entities.facturacion.EntityBill;
import com.puggysoft.entities.salary.EntitySalaryEmployee;


@Repository
public interface IRepositorySalaryEmployee extends JpaRepository<EntitySalaryEmployee, Long> {
    
    @Query(value = "SELECT COUNT(*) FROM sueldos_detalle_contratacion;", nativeQuery = true)
    Long findSize();

    @Query(value = "SELECT * FROM sueldos_detalle_contratacion LIMIT ?1, ?2", nativeQuery = true)
    List<EntityBill> findBillByPagination(int off, int size);
}
