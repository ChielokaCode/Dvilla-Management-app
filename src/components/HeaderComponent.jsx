import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class HeaderComponent extends Component {

    render() {
        return (
            <div>

                <header>
                    <nav className="navbar  navbar-expand-md navbar-dark bg-dark" >
                        <div style={{marginLeft: "30px",marginTop: "30px"}}><a href="https://dvillaevents.business.site" className="navbar-brand"><h3>D'VILLA Management App</h3></a></div>

                        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
                            <div style={{marginLeft: "50px"}} className="btn-group">
                                <Link to="/add-employee"><button type="button" onClick={this.addEmployee} className="btn btn-outline-primary">Add Employee</button></Link>
                                <button type="button" className="btn btn-outline-primary">Print Report</button>

                            </div>
                        </nav>
                    </nav>

                </header>
            </div>
        );
    }
}

export default HeaderComponent;