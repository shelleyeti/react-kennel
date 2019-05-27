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
                        <h6 className="card-body">
                        <p>Caretakers:</p>
                            
                                { this.props.employeeAnimals.length>0 ? 
                                        <ul>
                                    {this.props.employeeAnimals.map(e => {
                                        return <li key={e.id} id={e.id}> {e.name} </li>
                                    })
                                    }
                                    </ul> :
                                        <p>Please assign a caretaker</p>
                                 }
                        </h6>
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