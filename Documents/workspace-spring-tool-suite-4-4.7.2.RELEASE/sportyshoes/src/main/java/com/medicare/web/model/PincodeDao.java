package com.medicare.web.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.medicare.entity.Pincodes;
import com.medicare.entity.User;

@Repository
public interface PincodeDao extends JpaRepository<Pincodes, Integer> {

	@Query(value = "Select pincode from pin where pincode=?1 ",nativeQuery = true)
	public String find(String pin);

	
}
