package com.medicare.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Orders;

@Service
public class OrderService {

	@Autowired
	private OrderDao dao;
	public Orders addOrder(Orders order) {
		return dao.save(order);
	}
	public List<Orders> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}
	public long findCount() {
		// TODO Auto-generated method stub
		return dao.findCount();
	}
	public long findValue() {
		// TODO Auto-generated method stub
		return dao.findValue();
	}
}
