package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	@Modifying
	@Transactional
    @Query(value = "insert into users (username,password, email,mobile_number) VALUES ('driver', '$2a$04$GNOQYc.tyBqDxhrZoT0py.tLIKIaHfFliPZPwTezLltr6qhRWSyJy', 'driver@gmail.com', '6589588899'), ('engineer', '$2a$04$.yy48bFj1w6lzY2sjQCt5eVDRVZZJuBL/DTQzZek50BIl.HRhpPfe', 'engineer@gmail.com', '9635896456'), ('manager', '$2a$04$6tRkZvD/CIqJoeoL6ah4muF2es/ANJ6OMQvWcfzdVNBNaDPFeWAhe', 'manager@gmail.com', '6583232899'), ('admin', '$2a$04$UyzOdqcdxkh3F70LWo38A.YmrobbTlBtFCIcGHRs5P8sDN0x.fjwW', 'admin@gmail.com', '7878588899')", nativeQuery = true)
	public void modifyingQueryInsertUser();
	
	@Modifying
	@Transactional
    @Query(value = "insert into user_roles (user_id, role_id) VALUES (1,1), (2,2), (3,3), (4,4)", nativeQuery = true)
	public void modifyingQueryInsertUserRole();
}
