import React, { Component } from "react"
import "./Location.css"
import location from "./Location.png"

export default class Location extends Component {
    state = {
        saveDisabled: false
    }

    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteLocation(this.props.location.id);
    }

    render() {
        return (
            <section className="location">
                <div key={ this.props.location.id } className="card edit-location-card mx-auto">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ location } className="icon--location" alt="building"/>
                            { this.props.location.name }
                        </h4>
                        <h6 className="card-body">
                        <p>Employees:</p>
                            
                                { this.props.employeeLocations.length>0 ? 
                                        <ul>
                                    {this.props.employeeLocations.map(e => {
                                        return <li key={e.id} id={e.id}> {e.name} </li>
                                    })
                                    }
                                    </ul> :
                                        <p>Please assign an employee</p>
                                 }
                        </h6>
                        <button 
                        className="btn btn-outline-primary location-delete-btn btn-sm" 
                        disabled={ this.state.saveDisabled } 
                        onClick={this.handleClickDelete}>
                        Delete Hat
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}