import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';



class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);
        

        this.state = {
            employees:[]
        }

        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);


    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data});
        });
    }

    editEmployee(id){
        window.location.replace(`/update-employee/${id}`)
    };

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employees => employees.id !== id)});
        });
    }

    viewEmployee(id){
        window.location.replace(`/view-employee/${id}`)
    }
   

    render() {
        return (
            <div style={{marginTop: "30px"}}>
                <h2 className="text-center">Employee's List</h2>
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Job Role</th>
                            <th>Salary</th>
                            <th>Total Shortages</th>
                            <th>Total Salary</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                              this.state.employees.map(
                                employees=>
                            <tr key={employees.id}>
                                <td>{employees.firstName}</td>
                                <td>{employees.lastName}</td>
                                <td>{employees.jobRole}</td>
                                <td>{employees.salary}</td>
                                <td>{employees.totalShortage}</td>
                                <td>{employees.totalSalary}</td>
                                <td>
                                <button type="submit"  onClick={() => this.viewEmployee(employees.id)} className="btn btn-success">View</button>
                                <button type="submit" style={{marginLeft: "20px"}} onClick={() => this.editEmployee(employees.id)} className="btn btn-info">Update</button>
                                <button type="submit" style={{marginLeft: "20px"}} onClick={() => this.deleteEmployee(employees.id)} className="btn btn-danger">Delete</button>

                                </td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;