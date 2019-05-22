import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employees/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalDetail from "./animals/AnimalDetail"
import EmployeeDetail from "./employees/EmployeeDetail"
import OwnerDetail from "./owners/OwnerDetail"
import LocationDetail from "./locations/LocationDetail"
import AnimalForm from "./animals/AnimalForm"
import { withRouter } from 'react-router'


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
        .then(AnimalManager.getAll)
        .then(animals => { 
            console.log("new animals from delete", animals);
            newState.animals = animals})
        .then(() => {
            this.props.history.push("/animals")
            this.setState(newState)
        })
    };

    addAnimal = (animal) =>
    AnimalManager.makeAnimal(animal)
    .then(() => AnimalManager.getAll())
    .then(animals =>
        this.setState({
            animals: animals
        })
);
    
    deleteEmployee = (id) => {
        const newState = {};
        EmployeeManager.deleteEmployee(id)
        .then(EmployeeManager.getAll)
        .then(employees => {newState.employees = employees})
        .then(() => {
            this.props.history.push("/employees")
            this.setState(newState)
        })
    };

    deleteLocation = (id) => {
        const newState = {};
        LocationManager.deleteLocation(id)
        .then(LocationManager.getAll)
        .then(locations => {newState.locations = locations})
        .then(() => {
            this.props.history.push("/locations")
            this.setState(newState)
        })
    };

    deleteOwner = (id) => {
        const newState = {};
        OwnerManager.deleteOwner(id)
        .then(OwnerManager.getAll)
        .then(owners => {newState.owners = owners})
        .then(() => {
            this.props.history.push("/owners")
            this.setState(newState)
        })
    };

    componentDidMount() {
        const newState = {};
        AnimalManager.getAll()
            .then(animals => {newState.animals = animals})
            .then(EmployeeManager.getAll).then(employees => {newState.employees = employees})
            .then(LocationManager.getAll).then(locations => {newState.locations = locations})
            .then(OwnerManager.getAll).then(owners => {newState.owners = owners})
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} 
                        deleteLocation={this.deleteLocation}
                    />
                }} />
                <Route path="/locations/:locationsId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationsId)
                    )

                    if (!location) {
                        location = {id:404, name:"404", address: "Address not found"}
                    }

                    return <LocationDetail location={ location }
                                deleteLocation={ this.deleteLocation } />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} 
                        deleteAnimal={this.deleteAnimal}
                    />
                }} />
                {/*
                    This is a new route to handle a URL with the following pattern:
                        http://localhost:3000/animals/1

                    It will not handle the following URL because the `(\d+)`
                    matches only numbers after the final slash in the URL
                        http://localhost:3000/animals/jack
                */}
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }

                    return <AnimalDetail animal={ animal }
                                deleteAnimal={ this.deleteAnimal } />
                }} />
                <Route path="/animals/new" render={(props) => {
                return <AnimalForm {...props}
                    addAnimal={this.addAnimal}
                    employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} 
                        deleteEmployee={this.deleteEmployee}
                    />
                }} />
                  <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    if (!employee) {
                        employee = {id:404, name:"404", time: "Status found"}
                    }

                    return <EmployeeDetail employee={ employee }
                                deleteEmployee={ this.deleteEmployee } />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners}
                        deleteOwner={this.deleteOwner}
                    />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    let owner = this.state.owners.find(owner =>
                        owner.id === parseInt(props.match.params.ownerId)
                    )

                    if (!owner) {
                        owner = {id:404, name:"404"}
                    }

                    return <OwnerDetail owner={ owner }
                                deleteOwner={ this.deleteOwner } />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)