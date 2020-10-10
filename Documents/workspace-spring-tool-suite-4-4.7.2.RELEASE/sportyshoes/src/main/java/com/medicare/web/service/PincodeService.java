package com.medicare.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Pincodes;
import com.medicare.entity.User;
import com.medicare.web.model.PincodeDao;

@Service
public class PincodeService {

	@Autowired
	private PincodeDao dao;

	public String find(String pin) {
		// TODO Auto-generated method stub
		return dao.find(pin);
	}

	public void add(Pincodes pin) {
		// TODO Auto-generated method stub
		dao.save(pin);
	}

	public List<Pincodes> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}
}
