
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
    handleSearch (input) {
        console.log(input.target.value);
        // only search on enter/return keypress
        if (input.keyCode === 13) {
            console.log("HANDLE SEARCH - INPUT TARGET VALUE:", input.target.value);
            this.props.getSearchResults(input.target.value);
            this.props.history.push("/search");
        }
    }

    render () {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow main-nav">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                </ul>
                <input type="text" onKeyUp={ e => this.handleSearch(e) } />
            </nav>
        )
    }
}

export default withRouter(NavBar);