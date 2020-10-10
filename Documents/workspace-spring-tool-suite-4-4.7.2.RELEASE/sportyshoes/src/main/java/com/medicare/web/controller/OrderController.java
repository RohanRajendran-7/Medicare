package com.medicare.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Orders;
import com.medicare.web.service.OrderService;

@RestController
public class OrderController {
	@Autowired
	private OrderService service;
	
	@CrossOrigin
	@PostMapping("orders/add")
	private Orders addOrder(@RequestBody Orders order) {
		return service.addOrder(order);
	}
	@CrossOrigin
	@GetMapping("/orders")
	public List<Orders> findAll(){
		return service.findAll();
	}
	@CrossOrigin
	@GetMapping("/orders/count")
	public long count(){
		return service.findCount();
	}
	@CrossOrigin
	@GetMapping("/orders/value")
	public long value(){
		return service.findValue();
	}
}
