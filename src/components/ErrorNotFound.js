import React, { Component } from 'react';
// import { error } from "./Error.jpg"

export default class ErrorNotFound extends Component {

    render() {
        return (
            <div id='error'>
                <h1 className="notFoundTitle">Oops! You made Delta sad.</h1>
                <img src="Error.jpg" alt="sad delta"/>
                <p className="notFoundDesc">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        );
    }
}