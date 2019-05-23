import React, { Component } from "react";
import "./Owner.css";

class OwnerForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
        animalName: ""
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
    constructNewOwner = evt => {
        if (this.state.owner === "") {
            window.alert("Please select a owner");
        } else {
            const owner = {
                name: this.state.ownerName,
                petName: this.state.animalName
            };
            this.props.addOwner(owner)
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="card add-owner-card mx-auto">
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="animals">Assign to animal</label>
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
                    <button type="button" onClick={this.constructNewOwner} className="btn btn-outline-primary ownerButton float-right">Submit</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default OwnerForm