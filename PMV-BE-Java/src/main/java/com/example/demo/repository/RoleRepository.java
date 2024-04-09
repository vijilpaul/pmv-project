package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.ERole;
import com.example.demo.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
	
	@Modifying
	@Transactional
    @Query(value = "insert into roles (name) VALUES ('ROLE_DRIVER'), ('ROLE_ENGINEER'), ('ROLE_MANAGER'), ('ROLE_ADMIN')", nativeQuery = true)
	public void modifyingQueryInsertRole();
	
}
