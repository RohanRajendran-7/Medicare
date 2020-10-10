package com.medicare.web.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.medicare.entity.Orders;

@Repository
public interface OrderDao extends JpaRepository<Orders, Integer> {

	@Query(value = "Select count(id) from orders",nativeQuery = true)
	long findCount();

	@Query(value = "select sum(value) from orders", nativeQuery = true)
	long findValue();

	
}
