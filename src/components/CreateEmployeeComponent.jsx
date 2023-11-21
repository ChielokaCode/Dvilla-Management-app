import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            jobRole: '',
            salary: 0.0,
            totalShortage: 0.0,
            totalSalary: 0.0,
            bankName: '',
            accountNumber: ''

        }
        //this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);


    }
    saveEmployee = (event) => {
        event.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, phoneNumber: this.state.phoneNumber, jobRole: this.state.jobRole, salary: this.state.salary, totalShortage: this.state.totalShortage, totalSalary: this.state.totalSalary, bankName: this.state.bankName, accountNumber: this.state.accountNumber };
        console.log('employees => ' + JSON.stringify(employee));




        EmployeeService.createEmployee(employee).then(res => {
            window.location.replace('/employees');
        });

    }
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changePhoneNumberHandler = (event) => {
        this.setState({ phoneNumber: event.target.value });
    }

    changeJobRoleHandler = (event) => {
        this.setState({ jobRole: event.target.value });
    }

    //COLLECTS THE VALUE INTO SALARY
    changeSalaryHandler = (event) => {
        const salary = parseFloat(event.target.value);
        this.setState({ salary }, () => {
            this.updateTotalSalary();
        });
    }

    //COLLECTS THE VALUE INTO TOTAL SHORTAGES
    changeTotalShortagesHandler = (event) => {
        const totalShortage = parseFloat(event.target.value);
        this.setState({ totalShortage }, () => {
            this.updateTotalSalary();
        });
    }

    //METHOD TO DO THE SUBSTRACTION
    updateTotalSalary = () => {
        const { salary, totalShortage } = this.state;


        const totalSalary = salary - totalShortage;
        this.setState({ totalSalary });

    };

    changeBankNameHandler = (event) => {
        this.setState({ bankName: event.target.value });
    }
    changeAccountNumberHandler = (event) => {
        this.setState({ accountNumber: event.target.value });
    }


    //JSX
    render() {
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">

                            <form className="row g-3 needs-validation" noValidate>
                                <div className="col-md-4">
                                    <label htmlFor="firstName" className="form-label">First Name
                                        <input type="text" id="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} required /></label>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" id="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input type="text" id="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="jobRole" className="form-label">Job Role</label>
                                    <input type="text" id="jobRole" className="form-control" value={this.state.jobRole} onChange={this.changeJobRoleHandler} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="salary" className="form-label">Salary</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">₦</span>
                                        <input type="number" id="salary" className="form-control" value={this.state.salary} onChange={this.changeSalaryHandler} required />
                                        <div className="invalid-feedback">
                                            Please input the salary.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="totalShortage" className="form-label">Total Shortage</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">₦</span>
                                        <input type="number" id="totalShortage" className="form-control" value={this.state.totalShortage} onChange={this.changeTotalShortagesHandler} required />
                                        <div className="invalid-feedback">
                                            Please input the Total Shortage.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="totalSalary" className="form-label">Total Salary</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">₦</span>
                                        <input type="number" id="totalSalary" className="form-control" value={this.state.totalSalary} onChange={this.changeTotalSalaryHandler} disabled />
                                        <div className="invalid-feedback">
                                            Please input the Total Salary.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="bankName" className="form-label">Bank Name</label>
                                    <input type="text" id="bankName" className="form-control" value={this.state.bankName} onChange={this.changeBankNameHandler} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="accountNumber" className="form-label">Account Number</label>
                                    <input type="text" id="accountNumber" className="form-control" value={this.state.accountNumber} onChange={this.changeAccountNumberHandler} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>


                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary" onClick={this.saveEmployee}>Submit</button>
                                    <Link to="/employees"><button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;