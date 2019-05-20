import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./employee/LocationList"


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <EmployeeList title="To Be Fired"/>
                <LocationList title="Current Locations"/>
            </div>
        );
    }
}