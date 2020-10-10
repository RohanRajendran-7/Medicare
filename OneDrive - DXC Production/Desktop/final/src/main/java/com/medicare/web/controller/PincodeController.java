package com.medicare.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Pincodes;
import com.medicare.entity.User;
import com.medicare.web.service.PincodeService;

@RestController
public class PincodeController {

	@Autowired
	private PincodeService service;
	
	@CrossOrigin
	@GetMapping("/pincode/{pin}")
	public String GetUsers(@PathVariable String pin) {
		return service.find(pin);
	}
	@CrossOrigin
	@PostMapping("/pincode/add")
	public void Add(@RequestBody Pincodes pin) {
		 service.add(pin);
	}
	@CrossOrigin
	@GetMapping("/pincode/all")
	public List<Pincodes> GetAll() {
		return service.findAll();
	}
	
	
}
