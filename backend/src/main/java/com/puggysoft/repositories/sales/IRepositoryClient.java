package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntityClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryClient extends JpaRepository<EntityClient, Long> {

}