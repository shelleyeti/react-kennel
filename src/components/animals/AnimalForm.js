import React, { Component } from "react";
import "./Animal.css";

class AnimalForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        breed: "",
        animalId: "",
        employeeId: ""
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
    constructNewAnimal = evt => {
        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } else {
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed
            };
            // Create the animal and redirect user to animal list
            this.props.addAnimal(animal)
            .then((animals) => {
                
                var lastAnimal = animals[animals.length-1];
                const joined = {
                    animalId: parseInt(lastAnimal.id),
                    employeeId: parseInt(this.state.employeeId)
                } 
                this.props.addEmployeeAnimal(joined)
             })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card add-animal-card mx-auto">
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="animalName"
                            placeholder="Animal name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="breed"
                            placeholder="Breed"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to hattaker</label>
                        <select 
                            defaultValue=""
                            name="employee"
                            id="employeeId"
                            onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                            {this.props.employees.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button 
                    type="button" 
                    onClick={this.constructNewAnimal} 
                    className="btn btn-outline-primary animalButton float-right">
                    Submit Hat
                    </button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AnimalForm