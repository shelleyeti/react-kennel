import React, {Component} from "react";
import { Link } from "react-router-dom";
import owner from "./Owner.png"
import "./Owner.css"

class OwnerItem extends Component {
        
    state = {
        saveDisabled: false
    }
        
    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteOwner(this.props.owner.id);
    }

    handleClickDetails = (event) => {
        this.setState({
            saveDisabled: true
        })
    }

    render() {
        return (
            <div className="card owner-card d-inline-flex">
                <div className="card-body">
                    <h5 className="card-title">{this.props.owner.name}
                    <img src={owner} className="icon--owner--small" alt="pet owner"/></h5>
                    <span className="d-flex justify-content-center">
                        {this.props.owner.type}
                    </span>
                    <div className="d-flex justify-content-center">
                        <Link className="nav-link" to={`/owners/${this.props.owner.id}`}>Details</Link>
                        <button 
                        className="btn btn-outline-primary owner-delete-btn btn-sm" 
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

export default OwnerItem