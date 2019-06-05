import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  render () {
    // console.log("search results props", this.props.searchResults);
    if (this.props.searchResults.length > 0) {
      return (
        <section className="searchResults">
          <h2 className="page_title">
            Search Results for: "{ this.props.searchInput }"
          </h2>
          { this.props.searchResults.map(result => (
            <div key={ `${result.id}${result.name}` } className="result_card">
              <h2>{ result.name }</h2>
              <Link to={ `/animals/${result.id}` }>Details</Link>
            </div>
          )) }
        </section>
      );
    } else {
      return (
        <section className="searchResults">
          <h1 className="page_title">
            No Search Results for: "{ this.props.searchInput }"
          </h1>
        </section>
      );
    }
  }
}

export default SearchResults;