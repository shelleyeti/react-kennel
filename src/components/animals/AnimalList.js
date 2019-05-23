import React, { Component } from 'react'
import { withRouter } from 'react-router'
import AnimalItem from "./AnimalItem"
import "./Animal.css"

class AnimalList extends Component {

    render() {
        return (
            <section className="Animals">
                <div className="animalButton">
                    <button type="button" className="btn btn-outline-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>Admit Animal</button>
                </div>
                <h1>Animal List</h1>
                <div className="d-flex justify-content-center row">
                {
                    this.props.animals.map(item => {
                        return <AnimalItem key={item.id} animal={item}
                            deleteAnimal={this.props.deleteAnimal} />
                    })
                }
                </div>
            </section>
        )
    }
}

export default withRouter(AnimalList)