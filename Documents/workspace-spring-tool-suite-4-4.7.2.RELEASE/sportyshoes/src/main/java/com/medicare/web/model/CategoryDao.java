package com.medicare.web.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.medicare.entity.Category;

public interface CategoryDao extends JpaRepository<Category, Integer>{

	public Category findById(int id);

	@Modifying
	@Query(value = "Update category set offer = ?1 where id = ?2",nativeQuery = true)
	public void update(float offer,int id);
	
	public Category findByName(String name);
}
