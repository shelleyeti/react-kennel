import React, { Component } from 'react'


export default class Joke extends Component {
    tellNewJoke = () => {
        const joke = {
            id: 1005,
            type: "Sean Joke",
            setup: "What do you call a fly with no wings?",
            punchline: "A walk"
        }
        this.props.setNewJoke(joke);
    }
    render() {
        return (
            <div>
                <header>Type: {this.props.type}</header>
                <h2>Setup: {this.props.setup}</h2>
                <p>Punchline: {this.props.punchline}</p>
                <button onClick={this.tellNewJoke}>Tell a New Joke</button>
            </div>
        );
    }
}