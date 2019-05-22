import React, { Component } from 'react'
import EmployeeItem from "./EmployeeItem"
import "./Employee.css"


class EmployeeList extends Component {
    
    render() {
        return (
            <section className="Employees">
                <h1>Employee List</h1>
                {
                    this.props.employees.map(item => {
                        return <EmployeeItem key={item.id} employee={item}
                            deleteEmployee={this.props.deleteEmployee} />
                    })
                }
            </section>
        )
    }
}

export default EmployeeList