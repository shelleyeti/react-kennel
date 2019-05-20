import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./locations/LocationList"
import AnimalList from "./animals/AnimalList.js"
import Joke from "./joke/Joke"


export default class Kennel extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" },
        { id: 3, name: "Nashville East", address: "7210 Gallatin Ave" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Cat", type:"domesticated" },
        { id: 2, name: "Dog", type:"domesticated" },
        { id: 3, name: "Snake", type:"non-domesticated" },
        { id: 4, name: "Bird", type:"domesticated" }
    ]

    state = {
        id: 75,
        type: "general",
        setup: "What do you give a lemon in need?",
        punchline: "Lemonaid.",
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }
    setNewJoke = (jokeObj) => {
        this.setState({
            id: jokeObj.id,
            type: jokeObj.type,
            setup: jokeObj.setup,
            punchline: jokeObj.punchline
        })
    }
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <p>Nashville North Location</p>
                <p>500 Puppy Way</p>
                <hr></hr>
                <EmployeeList employees={this.state.employees}/>
                <hr></hr>
                <LocationList locations={this.state.locations}/>
                <hr></hr>
                <AnimalList animals={this.state.animals}/>
                <hr></hr>
                <Joke type={this.state.type}
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    setNewJoke={this.setNewJoke}
                />
            </div>
        );
    }
}