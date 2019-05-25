import React, {Component} from "react";
import { Link } from "react-router-dom";
import employee from "./Employee.png"
import "./Employee.css"

class EmployeeItem extends Component {
        
    state = {
        saveDisabled: false
    }
        
    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteEmployee(this.props.employee.id);
    }

    handleClickDetails = (event) => {
        this.setState({
            saveDisabled: true
        })
    }

    render() {
        return (
            <div className="card employee-card d-inline-flex">
                <div className="card-body">
                    <h5 className="card-title">{this.props.employee.name}
                    <img src={employee} className="icon--employee--small" alt="employee"/></h5>
                    <span className="d-flex justify-content-center">
                        {this.props.employee.time}
                    </span>
                    <div className="d-flex justify-content-center">
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <button 
                        className="btn btn-outline-primary animal-delete-btn btn-sm" 
                        disabled={ this.state.saveDisabled } 
                        onClick={this.handleClickDelete}>
                        Delete Hat
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeItem