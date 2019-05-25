import React, { Component } from 'react'
import { withRouter } from 'react-router'
import EmployeeItem from "./EmployeeItem"
import "./Employee.css"

class EmployeeList extends Component {
    
    render() {
        return (
            <section className="Employees">
                <div className="employeeButton">
                    <button type="button" className="btn btn-outline-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>Add Employee</button>
                </div>
                <h1>Hat List</h1>
                <div className="d-flex justify-content-center row">
                {
                    this.props.employees.map(item => {
                        return <EmployeeItem key={item.id} employee={item}
                            deleteEmployee={this.props.deleteEmployee} />
                    })
                }
                </div>
            </section>
        )
    }
}

export default withRouter(EmployeeList)