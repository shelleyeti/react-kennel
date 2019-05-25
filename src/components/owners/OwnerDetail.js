import React, { Component } from "react"
import "./Owner.css"
import owner from "./Owner.png"

export default class Owner extends Component {
    state = {
        saveDisabled: false
    }

    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteOwner(this.props.owner.id);
    }

    render() {
        return (
            <section className="owner">
                <div key={ this.props.owner.id } className="card edit-owner-card mx-auto">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ owner } className="icon--owner" alt="pet owner"/>
                            { this.props.owner.name }
                        </h4>
                        <button 
                        className="btn btn-outline-primary owner-delete-btn btn-sm" 
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