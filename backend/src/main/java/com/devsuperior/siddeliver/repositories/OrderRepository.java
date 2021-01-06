package com.devsuperior.siddeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.siddeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
