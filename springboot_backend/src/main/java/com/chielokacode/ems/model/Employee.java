package com.chielokacode.ems.model;

import jakarta.persistence.*;


@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "job_role")
	private String jobRole;
	
	@Column(name = "salary")
	private double salary;
	
	@Column(name = "total_shortage")
	private double totalShortage;
	
	@Column(name = "total_salary")
	private double totalSalary;
	
	@Column(name = "bank_name")
	private String bankName;
	
	@Column(name = "account_number")
	private String accountNumber;
	
	

	public Employee() {
		super();
	}
	

	

	public Employee(long id, String firstName, String lastName,String phoneNumber, String jobRole, double salary, double totalShortage, double totalSalary, String accountNumber, String bankName) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.jobRole = jobRole;
		this.salary = salary;
		this.totalShortage = totalShortage;
		this.totalSalary = totalSalary;
		this.accountNumber = accountNumber;
		this.bankName = bankName;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	


	public String getPhoneNumber() {
		return phoneNumber;
	}




	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}




	public String getJobRole() {
		return jobRole;
	}




	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}




	public double getSalary() {
		return salary;
	}




	public void setSalary(double salary) {
		this.salary = salary;
	}




	public double getTotalShortage() {
		return totalShortage;
	}




	public void setTotalShortage(double totalShortage) {
		this.totalShortage = totalShortage;
	}




	public double getTotalSalary() {
		return totalSalary;
	}




	public void setTotalSalary(double totalSalary) {
		this.totalSalary = totalSalary;
	}




	public String getBankName() {
		return bankName;
	}




	public void setBankName(String bankName) {
		this.bankName = bankName;
	}




	public String getAccountNumber() {
		return accountNumber;
	}




	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	
}
