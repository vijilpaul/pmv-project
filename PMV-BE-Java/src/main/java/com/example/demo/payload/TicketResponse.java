package com.example.demo.payload;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TicketResponse {

	private Long id;
	private String lastServiceMilage;
    private String lastServiceDate;
    private String serviceDescription;
    private String serviceCost;
    private String serviceEngineerName;
}
