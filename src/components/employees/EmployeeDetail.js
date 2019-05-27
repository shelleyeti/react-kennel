import React, { Component } from "react"
import "./Employee.css"
import employee from "./Employee.png"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteEmployee(this.props.employee.id);
    }

    render() {
        return (
            <section className="Employee">
                <div key={ this.props.employee.id } className="card edit-employee-card mx-auto">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ employee } className="icon--employee" alt="employee"/>
                            { this.props.employee.name }
                        </h4>
                        <h6 className="card-title">{ this.props.employee.time }</h6>
                        <h6 className="card-body">
                        <p>Animals:</p>
                            
                                { this.props.employeeAnimals.length>0 ? 
                                        <ul>
                                    {this.props.employeeAnimals.map(e => {
                                        return <li key={e.id} id={e.id}> {e.name} </li>
                                    })
                                    }
                                    </ul> :
                                        <p>Please assign an animal</p>
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