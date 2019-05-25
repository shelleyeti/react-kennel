import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"

export default class Animal extends Component {
    state = {
        saveDisabled: false
    }

    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteAnimal(this.props.animal.id);
    }

    render() {
        return (
            <section className="animal">
                <div key={ this.props.animal.id } className="card edit-animal-card mx-auto">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" alt="happy dog"/>
                            { this.props.animal.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animal.employeeId === this.props.employees.id ? this.props.employees.name : "Please assign a hattaker" }</h6>
                        <button 
                        className="btn btn-outline-primary animal-delete-btn btn-sm" 
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