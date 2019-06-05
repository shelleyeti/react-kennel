import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import SearchAPI from "../modules/API"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Kennel extends Component {
    state = {
        searchResults: [],
        searchInput: ""
    };

    getSearchResults = input => {
        // console.log("GETSEARCH INPUT:", input);
        this.setState({ searchInput: input });
        let newSearchResults = [];
        SearchAPI.search("animals", input)
            .then(results => (newSearchResults = results))
            //  * include search across all sections below
            .then(() => SearchAPI.search("employees", input))
            .then(results => results.forEach(result => newSearchResults.push(result)))
            .then(() => SearchAPI.search("owners", input))
            .then(results => results.forEach(result => newSearchResults.push(result)))
            .then(() => SearchAPI.search("locations", input))
            .then(results => results.forEach(result => newSearchResults.push(result)))
            .then(() => this.setState({ searchResults: newSearchResults }));
    };

    render () {
        return (
            <React.Fragment>
                <NavBar getSearchResults={ this.getSearchResults } />
                <ApplicationViews
                    searchResults={ this.state.searchResults }
                    searchInput={ this.state.searchInput }
                />
                {/* <Footer /> */ }
            </React.Fragment>
        );
    }
}

export default Kennel;