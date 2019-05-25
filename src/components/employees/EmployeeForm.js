import React, { Component } from "react";
import "./Employee.css";

class EmployeeForm extends Component {
    // Set initial state
    state = {
        employeeName: "",
        time: "",
        animalId: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
      */
    constructNewEmployee = evt => {
        if (this.state.animal === "") {
            window.alert("Please select a animal");
        } else {
            const employee = {
                name: this.state.employeeName,
                time: this.state.time,
                animalId: parseInt(this.state.animalId)
            };
            this.props.addEmployee(employee)
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="card add-employee-card mx-auto">
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee Hat</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Set time</label>
                        <select defaultValue=""
                            name="time"
                            id="time"
                            onChange={this.handleFieldChange}>
                            <option value="">Select an time option</option>
                            <option value="Full Time">Full Time Hat</option>
                            <option value="Part Time">Part Time Hat</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal">Assign to hat</label>
                        <select defaultValue=""
                            name="animal"
                            id="animalId"
                            onChange={this.handleFieldChange}>
                            <option value="">Select an animal</option>
                            {this.props.animals.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button 
                    type="button" 
                    onClick={this.constructNewEmployee} 
                    className="btn btn-outline-primary employeeButton float-right">
                    Submit Hat
                    </button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default EmployeeForm