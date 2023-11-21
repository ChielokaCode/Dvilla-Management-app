import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export const withParams = Component => props =>{
    let params = useParams();
    return <Component {...props} params = {params} />;
}
class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);

        let {id} = props.params;
        this.state = {
            id: id,
            employees: {}
        }
        this.homePage = this.homePage.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({employees: res.data});
        })
    }
    homePage(){
        window.location.replace("/employees");
    }

    render() {
        return (
            <div>
                <div style={{marginTop: "70px"}} className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <button type="button"  onClick={()=> this.homePage()} className="btn btn-outine-info"><b className="text-center">X</b></button>
                    <div className="card-body">
                        <div className="row">
                            <label><b>Employee's Name: </b></label>
                            <div> <b>{this.state.employees.firstName} {this.state.employees.lastName}</b></div>
                        </div>
                        <div style={{marginTop: "10px"}} className="row">
                            <label><b>Phone Number: </b></label>
                            <div> <b>{this.state.employees.phoneNumber}</b></div>
                        </div>
                        <div style={{marginTop: "10px"}} className="row">
                            <label><b>Salary: </b></label>
                            <div> <b>₦ {this.state.employees.salary}</b></div>
                        </div>

                        <div style={{marginTop: "10px"}} className="row">
                            <label><b>Total Shortage: </b></label>
                            
                            <div> <b>₦ {this.state.employees.totalShortage}</b></div>
                        </div>
                        <div style={{marginTop: "10px"}} className="row">
                            <label><b>Total Salary: </b></label>
                            <div> <b>₦ {this.state.employees.totalSalary}</b></div>
                        </div>
                        <div style={{marginTop: "10px"}} className="row">
                            <label><b>Bank Name: </b></label>
                            <div> <b>{this.state.employees.bankName}</b></div>
                        </div>
                        <div style={{marginTop: "10px"}} className="row">
                            <label><b>Account Number: </b></label>
                            <div> <b>{this.state.employees.accountNumber}</b></div>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default withParams(ViewEmployeeComponent);