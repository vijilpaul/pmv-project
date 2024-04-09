package com.example.demo.payload;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String username;
	private String email;
	private List<String> roles;
}
