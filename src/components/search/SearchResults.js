import React, { Component } from "react"
import "./Search.css"
// import dog from "./DogIcon.svg"

export default class Search extends Component {
    state = {
        saveDisabled: false
    }

    handleClickDelete = (event) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteAnimal(this.props.animal.id);
    }
}