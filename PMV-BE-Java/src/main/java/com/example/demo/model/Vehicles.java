package com.example.demo.model;

import java.util.Date;

import javax.persistence.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles")
public class Vehicles {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
 
    @Temporal(TemporalType.DATE)
    private Date createdDate = new Date(System.currentTimeMillis());
    
    private String plateNo;
    private String carModel;
    private String manufacturingYear;
    private String upcomingServiceDate;
    private String driverInformation;
    private String lastServiceMilage;
    private String lastServiceDate;
    private String serviceDescription;
    private String serviceCost;
    private String serviceEngineerName;
}
