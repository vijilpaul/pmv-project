package com.example.demo.payload;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarResponse {
	private Long id;
	private String plateNo;
    private String carModel;
    private String manufacturingYear;
    private String upcomingServiceDate;
    private String driverInformation;

}
