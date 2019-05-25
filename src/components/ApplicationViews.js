import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employees/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"
import EmployeeAnimal from "../modules/EmployeeAnimals"
import EmployeeLocation from "../modules/EmployeeLocations"
import OwnerAnimal from "../modules/OwnerAnimals"
import AnimalDetail from "./animals/AnimalDetail"
import EmployeeDetail from "./employees/EmployeeDetail"
import OwnerDetail from "./owners/OwnerDetail"
import LocationDetail from "./locations/LocationDetail"
import AnimalForm from "./animals/AnimalForm"
import EmployeeForm from "./employees/EmployeeForm"
import LocationForm from "./locations/LocationForm"
import OwnerForm from "./owners/OwnerForm"
import AnimalEditForm from "./animals/AnimalEditForm"
import Login from './authentication/Login'


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }


    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
            .then(AnimalManager.getAll)
            .then(animals => newState.animals = animals)
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    };

    addAnimal = (animal) => {
        const newState = {};
        return AnimalManager.makeAnimal(animal)
            .then(() => AnimalManager.getAll())
            .then(animals => newState.animals = animals)
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            });
    };

    updateAnimal = (editedAnimalObject) => {
        const newState = {};
        AnimalManager.editAnimal(editedAnimalObject)
            .then(() => AnimalManager.getAll())
            .then(animals => newState.animals = animals)
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            });
    };


    deleteEmployee = (id) => {
        const newState = {};
        EmployeeManager.deleteEmployee(id)
            .then(EmployeeManager.getAll)
            .then(employees => newState.employees = employees)
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState)
            })
    };

    addEmployee = (employee) => {
        const newState = {};
        EmployeeManager.makeEmployee(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState)
            });
    };

    updateEmployee = (editedEmployeeObject) => {
        const newState = {};
        EmployeeManager.editEmployee(editedEmployeeObject)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState)
            });
    };

    deleteLocation = (id) => {
        const newState = {};
        LocationManager.deleteLocation(id)
            .then(LocationManager.getAll)
            .then(locations => newState.locations = locations)
            .then(() => {
                this.props.history.push("/locations")
                this.setState(newState)
            })
    };

    addLocation = (location) => {
        const newState = {};
        LocationManager.makeLocation(location)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => {
                this.props.history.push("/locations")
                this.setState(newState)
            });
    };

    updateLocation = (editedLocationObject) => {
        const newState = {};
        LocationManager.editLocation(editedLocationObject)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => {
                this.props.history.push("/locations")
                this.setState(newState)
            });
    };

    deleteOwner = (id) => {
        const newState = {};
        OwnerManager.deleteOwner(id)
            .then(OwnerManager.getAll)
            .then(owners => newState.owners = owners)
            .then(() => {
                this.props.history.push("/owners")
                this.setState(newState)
            })
    };

    addOwner = (owner) => {
        const newState = {};
        OwnerManager.makeOwner(owner)
            .then(() => OwnerManager.getAll())
            .then(owners => newState.owners = owners)
            .then(() => {
                this.props.history.push("/owners")
                this.setState(newState)
            });
    };

    updateOwner = (editedOwnerObject) => {
        const newState = {};
        OwnerManager.editOwner(editedOwnerObject)
            .then(() => OwnerManager.getAll())
            .then(owners => newState.owners = owners)
            .then(() => {
                this.props.history.push("/owners")
                this.setState(newState)
            });
    };

    deleteEmployeeAnimal = (id) => {
        const newState = {};
        EmployeeAnimal.deleteEmployeeAnimal(id)
            .then(EmployeeAnimal.getAll)
            .then(employeeAnimals => newState.employeeAnimals = employeeAnimals)
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState)
            })
    };

    addEmployeeAnimal = (employeeAnimal) => {
        const newState = {};
        EmployeeAnimal.makeEmployeeAnimal(employeeAnimal)
            .then(EmployeeAnimal.getAll)
            .then(employeeAnimals => newState.employeeAnimals = employeeAnimals)
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState)
            })
    };

    updateEmployeeAnimal = (employeeAnimalObject) => {
        const newState = {};
        EmployeeAnimal.editEmployeeAnimal(employeeAnimalObject)
            .then(EmployeeAnimal.getAll)
            .then(employeeAnimals => newState.employeeAnimals = employeeAnimals)
            .then(() => {
                this.props.history.push("/employees")
                this.setState(newState)
            })
    };

    deleteEmployeeLocation = (id) => {
        const newState = {};
        EmployeeLocation.deleteEmployeeLocation(id)
            .then(EmployeeLocation.getAll)
            .then(employeeLocations => newState.employeeLocations = employeeLocations)
            .then(() => {
                this.props.history.push("/locations")
                this.setState(newState)
            })
    };

    addEmployeeLocation = (employeeLocation) => {
        const newState = {};
        EmployeeLocation.makeEmployeeLocation(employeeLocation)
            .then(EmployeeLocation.getAll)
            .then(employeeLocations => newState.employeeLocations = employeeLocations)
            .then(() => {
                this.props.history.push("/locations")
                this.setState(newState)
            })
    };

    updateEmployeeLocation = (employeeLocationObject) => {
        const newState = {};
        EmployeeLocation.editEmployeeLocation(employeeLocationObject)
            .then(EmployeeLocation.getAll)
            .then(employeeLocations => newState.employeeLocations = employeeLocations)
            .then(() => {
                this.props.history.push("/locations")
                this.setState(newState)
            })
    };

    deleteOwnerAnimal = (id) => {
        const newState = {};
        OwnerAnimal.deleteOwnerAnimal(id)
            .then(OwnerAnimal.getAll)
            .then(OwnerAnimals => newState.OwnerAnimals = OwnerAnimals)
            .then(() => {
                this.props.history.push("/owner")
                this.setState(newState)
            })
    };

    addOwnerAnimal = (OwnerAnimal) => {
        const newState = {};
        OwnerAnimal.makeOwnerAnimal(OwnerAnimal)
            .then(OwnerAnimal.getAll)
            .then(OwnerAnimals => newState.OwnerAnimals = OwnerAnimals)
            .then(() => {
                this.props.history.push("/owner")
                this.setState(newState)
            })
    };

    updateOwnerAnimal = (OwnerAnimalObject) => {
        const newState = {};
        OwnerAnimal.editOwnerAnimal(OwnerAnimalObject)
            .then(OwnerAnimal.getAll)
            .then(OwnerAnimals => newState.OwnerAnimals = OwnerAnimals)
            .then(() => {
                this.props.history.push("/owner")
                this.setState(newState)
            })
    };

    componentDidMount() {
        const newState = {};
        AnimalManager.getAll()
            .then(animals => { newState.animals = animals })
            .then(EmployeeManager.getAll).then(employees => { newState.employees = employees })
            .then(LocationManager.getAll).then(locations => { newState.locations = locations })
            .then(OwnerManager.getAll).then(owners => { newState.owners = owners })
            .then(() => this.setState(newState))
    };

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
                        location = { id: 404, name: "404", address: "Address not found" }
                    }

                    return <LocationDetail location={location}
                        deleteLocation={this.deleteLocation} />
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props}
                        addLocation={this.addlocation} />
                }} />


                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal}
                    />
                }} />

                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail {...props}
                        employees={this.state.employees}
                        // animals={this.state.animals}
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                    />
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props}
                        employees={this.state.employees}
                        updateAnimal={this.updateAnimal} />
                }}
                />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />


                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    if (!employee) {
                        employee = { id: 404, name: "404", time: "Status found" }
                    }

                    let animalCaretaker = this.state.animals.find(animal => {
                        let animalId = 0
                        if (employee != null && employee.animalId != null) {
                            animalId = employee.animalId
                        }
                        if (animal.id === parseInt(animalId))
                            return animal
                        return null
                    })

                    return <EmployeeDetail employee={employee}
                        animalCaretaker={animalCaretaker}
                        deleteEmployee={this.deleteEmployee}
                        animals={this.state.animals}
                    />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        animals={this.state.animals}
                        employees={this.state.employees}
                    />
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
                        owner = { id: 404, name: "404" }
                    }

                    return <OwnerDetail owner={owner}
                        deleteOwner={this.deleteOwner}
                    />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                        addOwner={this.addOwner}
                        animals={this.state.animals}
                        owners={this.state.owners}
                    />
                }} />

                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)