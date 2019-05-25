import React, {Component} from "react";
import { Link } from "react-router-dom";
import location from "./Location.png"
import "./Location.css"

class LocationItem extends Component {
        
    state = {
        saveDisabled: false
    }
        
    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteLocation(this.props.location.id);
    }

    handleClickDetails = (event) => {
        this.setState({
            saveDisabled: true
        })
    }

    render() {
        return (
            <div className="card location-card d-inline-flex">
                <div className="card-body">
                    <h5 className="card-title">{this.props.location.name}
                    <img src={location} className="icon--location--small" alt="building"/></h5>
                    <span className="d-flex justify-content-center">
                        {this.props.location.address}
                    </span>
                    <div className="d-flex justify-content-center">
                        <Link className="nav-link" to={`/locations/${this.props.location.id}`}>Details</Link>
                        <button 
                        className="btn btn-outline-primary location-delete-btn btn-sm" 
                        disabled={ this.state.saveDisabled } 
                        onClick={this.handleClickDelete}>
                        Delete Hat
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LocationItem