import React, {Component} from "react";
import { Link } from "react-router-dom";
import dog from "./DogIcon.svg"
import "./Animal.css"

class AnimalItem extends Component {

    state = {
        saveDisabled: false
    }
        
    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteAnimal(this.props.animal.id);
    }

    handleClickDetails = (event) => {
        this.setState({
            saveDisabled: true
        })
    }

    render() {
        return (
            <div className="card animal-card d-inline-flex">
                <div className="card-body">
                    <h5 className="card-title">{this.props.animal.name}
                    <img src={dog} className="icon--dog--small" alt="happy dog"/></h5>
                    <span className="d-flex justify-content-center">
                        {this.props.animal.breed}
                    </span>
                    <div className="d-flex justify-content-center">
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <button className="btn btn-outline-primary animal-delete-btn btn-sm" disabled={ this.state.saveDisabled } onClick={this.handleClickDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnimalItem