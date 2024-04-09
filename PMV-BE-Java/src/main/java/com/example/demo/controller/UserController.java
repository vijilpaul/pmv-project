package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.payload.LoginRequest;
import com.example.demo.payload.LoginResponse;
import com.example.demo.repository.UserRepository;
import com.example.demo.services.UserServices;
import com.example.demo.utils.JwtUtils;
import com.example.demo.utils.UserDetailsImpl;


@CrossOrigin(origins =  "*")
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserServices userServices;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	PasswordEncoder encoder;
	
	@GetMapping("/isuser")
	public boolean isUserList(){
		return userServices.IsUserCheck();
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerHardcode(){
		return userServices.registerHardcode();
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();	
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());
		
		return ResponseEntity.ok(new LoginResponse(jwt, "Bearer", userDetails.getId(), userDetails.getUsername(),userDetails.getEmail(),roles));
			
	}
	
}
