import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    
    state = {
        searchAnimals: [],
        searchEmployees: [],
        searchLocations: [],
        searchOwners: []
    }

    // Add the q to the url and search options
    search = (results) => {
        const newState = {}
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locationss")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    handleSearch = (e) => {
        if (e.key === "Enter") {
            this.search(e.target.value)
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews searchAnimals={this.state.searchAnimals} 
                    searchEmployees={this.state.searchEmployees}
                    searchLocations={this.state.searchLocations}
                    searchOwners={this.state.searchOwners}
                />
            </React.Fragment>
        )
    }
}

export default Kennel