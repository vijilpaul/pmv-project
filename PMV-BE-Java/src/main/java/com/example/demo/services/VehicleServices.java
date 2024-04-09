package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.message.ResponseMessage;
import com.example.demo.model.Vehicles;
import com.example.demo.payload.CarResponse;
import com.example.demo.repository.VehiclesRepository;

@Service
public class VehicleServices {

	@Autowired
	private VehiclesRepository vsRepository;
	
	public ArrayList<Object> allCars() {
		List<Vehicles> vehicleList = vsRepository.findAll();
		ArrayList<Object> newList = new ArrayList<Object>();
		for (Vehicles item : vehicleList) {
			newList.add(new CarResponse(item.getId(), item.getPlateNo(), item.getCarModel(), item.getManufacturingYear(), item.getUpcomingServiceDate(), item.getDriverInformation()));
		}
		return newList;
	}
	
	public ResponseEntity<?> updateExistCar(long id, Vehicles car){
		Vehicles vehicles = vsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car list not exist with id:"+id));
		
		vehicles.setPlateNo(car.getPlateNo());
		vehicles.setCarModel(car.getCarModel());
		vehicles.setManufacturingYear(car.getManufacturingYear());
		vehicles.setUpcomingServiceDate(car.getUpcomingServiceDate());
		vehicles.setDriverInformation(car.getDriverInformation());
		vsRepository.save(vehicles);
	    return ResponseEntity.ok(new ResponseMessage("Car updated successfully!"));
	}
	
	public ResponseEntity<?> createTicketWithVehicle(long id, Vehicles car){
		Vehicles vehicles = vsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car list not exist with id:"+id));

		vehicles.setLastServiceMilage(car.getLastServiceMilage());
		vehicles.setLastServiceDate(car.getLastServiceDate());
		vehicles.setServiceDescription(car.getServiceDescription());
		vehicles.setServiceCost(car.getServiceCost());
		vehicles.setServiceEngineerName(car.getServiceEngineerName());
		
		vsRepository.save(vehicles);
		
	    return ResponseEntity.ok(new ResponseMessage("Ticket created successfully!"));
	}
	
	public ResponseEntity<?> updateTicketWithVehicle(long id, Vehicles car){
		Vehicles vehicles = vsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car list not exist with id:"+id));

		vehicles.setLastServiceMilage(car.getLastServiceMilage());
		vehicles.setLastServiceDate(car.getLastServiceDate());
		vehicles.setServiceDescription(car.getServiceDescription());
		vehicles.setServiceCost(car.getServiceCost());
		vehicles.setServiceEngineerName(car.getServiceEngineerName());
		
		vsRepository.save(vehicles);
		
	    return ResponseEntity.ok(new ResponseMessage("Ticket Updated successfully!"));
	}
	
	public ArrayList<Object> allTicket() {
		List<Vehicles> vehicleList = vsRepository.findAll();
		ArrayList<Object> newList = new ArrayList<Object>();
		for (Vehicles item : vehicleList) {
			if(item.getServiceCost() == null) {
				newList.add(new CarResponse(item.getId(), item.getPlateNo(), item.getCarModel(), item.getManufacturingYear(), item.getUpcomingServiceDate(), item.getDriverInformation()));
			}
		}
		return newList;
	}
	
	public int allTicketCount() {
		List<Vehicles> vehicleList = vsRepository.findAll();
		ArrayList<Object> newList = new ArrayList<Object>();
		for (Vehicles item : vehicleList) {
			if(item.getServiceCost() == null) {
				newList.add(new CarResponse(item.getId(), item.getPlateNo(), item.getCarModel(), item.getManufacturingYear(), item.getUpcomingServiceDate(), item.getDriverInformation()));
			}
		}
		return newList.size();
	}

}
