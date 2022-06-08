package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntitySale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositorySale extends JpaRepository<EntitySale, Long> {

}