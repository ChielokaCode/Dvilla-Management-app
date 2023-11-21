package com.chielokacode.ems.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.chielokacode.ems.exception.ResourceNotFoundException;
import com.chielokacode.ems.model.Employee;
import com.chielokacode.ems.repository.EmployeeRepository;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all Employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//create employee Rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//get Employee By Id REST API
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id:" + id));
		return ResponseEntity.ok(employee);
	}
	
	//update Employees Details REST API
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetail){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id:" + id));
		
		employee.setFirstName(employeeDetail.getFirstName());
		employee.setLastName(employeeDetail.getLastName());
		employee.setPhoneNumber(employeeDetail.getPhoneNumber());
		employee.setJobRole(employeeDetail.getJobRole());
		employee.setSalary(employeeDetail.getSalary());
		employee.setTotalShortage(employeeDetail.getTotalShortage());
		double salary = employeeDetail.getSalary();
		double totalShortage = employeeDetail.getTotalShortage();
		double minus = salary - totalShortage;
		employee.setTotalSalary(minus);
		employee.setBankName(employeeDetail.getBankName());
		employee.setAccountNumber(employeeDetail.getAccountNumber());




		Employee updateEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updateEmployee);
	}
	
	//Delete Employee
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id:" + id));
		
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
