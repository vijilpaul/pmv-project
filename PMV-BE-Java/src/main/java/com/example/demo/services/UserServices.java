package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.model.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.utils.UserDetailsImpl;

@Service
public class UserServices implements UserDetailsService {

	public boolean isInsertData = false;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}
	
	public ResponseEntity<?> registerHardcode(){
		if(!isInsertData) {
			userRepository.modifyingQueryInsertUser();
			roleRepository.modifyingQueryInsertRole();
			userRepository.modifyingQueryInsertUserRole();
			isInsertData = true;
		}
		return ResponseEntity.ok("Register Success");
	}
	
	public boolean IsUserCheck() {
		boolean alreadyRegister = false;
		long userCount = userRepository.count();
		if(userCount > 0) {
			alreadyRegister = true;
		}
		return alreadyRegister;
		
	}
}
