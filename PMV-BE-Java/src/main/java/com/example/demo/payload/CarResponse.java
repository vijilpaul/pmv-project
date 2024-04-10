package com.example.demo.payload;

import lombok.*;

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
