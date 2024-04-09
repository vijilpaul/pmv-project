package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.message.ResponseMessage;
import com.example.demo.model.Vehicles;
import com.example.demo.payload.CarResponse;
import com.example.demo.repository.VehiclesRepository;
import com.example.demo.services.VehicleServices;

@CrossOrigin(origins =  "*")
@RestController
@RequestMapping("/api/v1/vehicle")
public class VehiclesController {
	
	@Autowired
	private VehiclesRepository vsRepository;
	
	@Autowired
	private VehicleServices vsServices;
	
	
	@GetMapping("/list")
	public List<Vehicles> getAllVehicle(){
	    return (List<Vehicles>) vsRepository.findAll();
	}
	
	@GetMapping("/cars")
	public ArrayList<Object> getAllCar(){
	    return vsServices.allCars();
	}
	
	@GetMapping("/cars/{id}")
	public ResponseEntity<CarResponse> getAllCar(@PathVariable long id){
		Vehicles vehicles = vsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car list not exist with id:"+id));
	    return ResponseEntity.ok(new CarResponse(vehicles.getId(), vehicles.getPlateNo(), vehicles.getCarModel(), vehicles.getManufacturingYear(), vehicles.getUpcomingServiceDate(), vehicles.getDriverInformation()));
	}
	
	@PostMapping("/cars")
	public ResponseEntity<?> registerCountry(@RequestBody Vehicles vehicles) {
		vsRepository.save(vehicles);
		return ResponseEntity.ok(new ResponseMessage("Car has been registered successfully!"));
	}
	
	@PutMapping("/cars/{id}")
	public ResponseEntity<?> updateCar(@PathVariable long id, @RequestBody Vehicles vehicles){

	    return vsServices.updateExistCar(id, vehicles);
	}
	
	@DeleteMapping("/cars/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteSilver(@PathVariable Long id){
		Vehicles vehicle = vsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car not exist with id:"+id));
		
		vsRepository.delete(vehicle);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/tickets")
	public ArrayList<Object> getAllTickets(){
	    return vsServices.allTicket();
	}
	
	@GetMapping("/ticket-count")
	public int getAllTicketsCount(){
	    return vsServices.allTicketCount();
	}
	
	@PatchMapping("/ticket/{id}")
	public ResponseEntity<?> createTicket(@PathVariable long id, @RequestBody Vehicles ticket){
		return vsServices.createTicketWithVehicle(id, ticket);
	}
	
	
}
