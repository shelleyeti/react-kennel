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
        owners: [],
        employeeAnimals: [],
        employeeLocations: [],
        ownerAnimals: []
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
            .then((animalp) => AnimalManager.getAll())
            .then(animals => newState.animals = animals)
            .then((animals) => {
                this.props.history.push("/animals")
                this.setState(newState)

                return animals;
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
                this.props.history.push("/animals")
                this.setState(newState)
            })
    };

    addOwnerAnimal = (OwnerAnimal) => {
        const newState = {};
        OwnerAnimal.makeOwnerAnimal(OwnerAnimal)
            .then(OwnerAnimal.getAll)
            .then(OwnerAnimals => newState.OwnerAnimals = OwnerAnimals)
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    };

    deleteEmployeeAnimal = (id) => {
        const newState = {};
        EmployeeAnimal.deleteEmployeeAnimal(id)
            .then(EmployeeAnimal.getAll)
            .then(EmployeeAnimals => newState.EmployeeAnimals = EmployeeAnimals)
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    };

    addEmployeeAnimal = (employeeAnimal) => {
        const newState = {};
        EmployeeAnimal.makeEmployeeAnimal(employeeAnimal)
            .then(EmployeeAnimal.getAll)
            .then(employeeAnimals => newState.employeeAnimals = employeeAnimals)
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    };

    deleteEmployeeLocation = (id) => {
        const newState = {};
        EmployeeLocation.deleteEmployeeLocation(id)
            .then(EmployeeLocation.getAll)
            .then(EmployeeLocations => newState.EmployeeLocations = EmployeeLocations)
            .then(() => {
                this.props.history.push("/locations")
                this.setState(newState)
            })
    };

    addEmployeeLocation = (EmployeeLocation) => {
        const newState = {};
        EmployeeLocation.makeEmployeeLocation(EmployeeLocation)
            .then(EmployeeLocation.getAll)
            .then(EmployeeLocations => newState.EmployeeLocations = EmployeeLocations)
            .then(() => {
                this.props.history.push("/locations")
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
            .then(EmployeeAnimal.getAll).then(employeeAnimals => { 
                newState.employeeAnimals = employeeAnimals})
            .then(EmployeeLocation.getAll).then(employeeLocations => { newState.employeeLocations = employeeLocations})
            .then(OwnerAnimal.getAll).then(ownerAnimals => { newState.ownerAnimals = ownerAnimals})
            .then(() => 
            this.setState(newState))
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
                    
                    // If current location details is in the employeeLocations joined table, adds to an array called employeeLocationsId
                    let employeeLocationsIds = this.state.employeeLocations.filter(locationJoin => {
                        let locationId = 0
                        if (locationJoin != null && locationJoin.locationId != null) {
                            locationId = locationJoin.locationId
                        }
                        if (location.id === parseInt(locationId))
                            return location;
                    })

                    //Take employeeLocationsId array and compare to employees table
                    let employeeLocations = this.state.employees.filter(employee => {
                        let employeeId = 0;
                        if(employee != null && employee.id != null){
                            employeeId = employee.id;
                        }
                        for(let i = 0; i<employeeLocationsIds.length; i++){
                            if(employeeLocationsIds[i].employeeId === employeeId)
                                return employeeLocationsIds[i];
                        }
                    });

                    return <LocationDetail location={location}
                        deleteLocation={this.deleteLocation} 
                        employeeLocations={employeeLocations}
                        />
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
                    // If current animal details is in the employeeAnimals joined table, adds to an array called employeeAnimalsId
                    let employeeAnimalIds = this.state.employeeAnimals.filter(animalJoin => {
                        let animalId = 0
                        if (animalJoin != null && animalJoin.animalId != null) {
                            animalId = animalJoin.animalId
                        }
                        if (animal.id === parseInt(animalId))
                            return animal;
                    })

                    //Take employeeAnimalsId array and compare to employees table
                    let employeeAnimals = this.state.employees.filter(employee => {
                        let employeeId = 0;
                        if(employee != null && employee.id != null){
                            employeeId = employee.id;
                        }
                        for(let i = 0; i<employeeAnimalIds.length; i++){
                            if(employeeAnimalIds[i].employeeId === employeeId)
                                return employeeAnimalIds[i];
                        }
                    });

                    return <AnimalDetail {...props}
                        employees={this.state.employees}
                        employeeAnimals={employeeAnimals}
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
                        animals={this.state.animals}
                        employees={this.state.employees}
                        addEmployeeAnimal={this.addEmployeeAnimal}
                         />
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

                    // If current employee details is in the employeeAnimals joined table, adds to an array called employeeAnimalsId
                    let employeeAnimalIds = this.state.employeeAnimals.filter(animalJoin => {
                        let employeeId = 0
                        if (animalJoin != null && animalJoin.employeeId != null) {
                            employeeId = animalJoin.employeeId
                        }
                        if (employee.id === parseInt(employeeId))
                            return employee;
                    })

                    //Take employeeAnimalsId array and compare to animals table
                    let employeeAnimals = this.state.animals.filter(animal => {
                        let animalId = 0;
                        if(animal != null && animal.id != null){
                            animalId = animal.id;
                        }
                        for(let i = 0; i<employeeAnimalIds.length; i++){
                            if(employeeAnimalIds[i].animalId === animalId)
                                return employeeAnimalIds[i];
                        }
                    });

                    return <EmployeeDetail employee={employee}
                        // animalCaretaker={animalCaretaker}
                        employeeAnimals={employeeAnimals}
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
                    // If current owner details is in the ownerAnimals joined table, adds to an array called ownerAnimalsId
                    let ownerAnimalIds = this.state.ownerAnimals.filter(ownerJoin => {
                        let ownerId = 0
                        if (ownerJoin != null && ownerJoin.ownerId != null) {
                            ownerId = ownerJoin.ownerId
                        }
                        if (owner.id === parseInt(ownerId))
                            return owner;
                    })

                    //Take ownerAnimalsId array and compare to animal table
                    let ownerAnimals = this.state.animals.filter(animal => {
                        let animalId = 0;
                        if(animal != null && animal.id != null){
                            animalId = animal.id;
                        }
                        for(let i = 0; i<ownerAnimalIds.length; i++){
                            if(ownerAnimalIds[i].animalId === animalId)
                                return ownerAnimalIds[i];
                        }
                    });

                    return <OwnerDetail owner={owner}
                        ownerAnimals={ownerAnimals}
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