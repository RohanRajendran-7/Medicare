package com.medicare.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Category;
import com.medicare.web.service.CategoryService;

@RestController
public class CategoryController {
	@Autowired
	private CategoryService service;
	
	@CrossOrigin
	@GetMapping("admin/categories")
	public List<Category> getAll() {
		return service.getAll();
	}
	@CrossOrigin
	@DeleteMapping("admin/categories/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
	@CrossOrigin
	@PutMapping("admin/categories/update/{id}")
	public void update(@PathVariable int id,@RequestBody Category category) {
		service.update(category);
	}
	

}
