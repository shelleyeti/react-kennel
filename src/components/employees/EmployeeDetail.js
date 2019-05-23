import React, { Component } from "react"
import "./Employee.css"
import employee from "./Employee.svg"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteEmployee(this.props.employee.id);
    }

    render() {
        return (
            <section className="Employee">
                <div key={ this.props.employee.id } className="card employee-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ employee } className="icon--employee" alt="employee"/>
                            { this.props.employee.name }
                        </h4>
                        <h6 className="card-title">{ this.props.employee.time }</h6>
                        <button className="btn btn-outline-primary animal-delete-btn btn-sm" disabled={ this.state.saveDisabled } onClick={this.handleClickDelete}>Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}