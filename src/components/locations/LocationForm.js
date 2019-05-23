import React, { Component } from "react";
import "./Location.css";

class LocationForm extends Component {
    // Set initial state
    state = {
        locationName: "",
        locationAddress: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewLocation = evt => {
        if (this.state.location === "") {
            window.alert("Please select a location");
        } else {
            const location = {
                name: this.state.locationName,
                address: this.state.locationAddress
            };
            this.props.addLocation(location)
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="card add-location-card mx-auto">
                <form className="locationForm">
                    <div className="form-group">
                        <label htmlFor="locationName">Location name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="locationName"
                            placeholder="Location name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="locationAddress">Location address</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="locationAddress"
                            placeholder="Location address"/>
                    </div>
                    <button type="button" onClick={this.constructNewOwner} className="btn btn-outline-primary ownerButton float-right">Submit</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LocationForm