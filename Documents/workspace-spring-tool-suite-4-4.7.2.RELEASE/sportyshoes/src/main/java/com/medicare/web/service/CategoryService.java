package com.medicare.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Category;
import com.medicare.web.model.CategoryDao;

@Service
public class CategoryService {

	@Autowired
	private CategoryDao dao;
	
	public List<Category> getAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	public Category add(Category category) {
		// TODO Auto-generated method stub
		return dao.save(category);
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	public void update(Category category) {
		// TODO Auto-generated method stub
		dao.save(category);
	}

}
