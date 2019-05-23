import React, { Component } from 'react'
import { withRouter } from 'react-router'
import LocationItem from "./LocationItem"
import "./Location.css"

class LocationList extends Component {
    
    render() {
        return (
            <section className="Location">
                <div className="locationButton">
                    <button type="button" className="btn btn-outline-success"
                            onClick={() => {
                                this.props.history.push("/locations/new")}
                            }>Add Location</button>
                </div>
                <h1>Location List</h1>
                <div className="d-flex justify-content-center row">
                {
                    this.props.locations.map(item => {
                        return <LocationItem key={item.id} location={item}
                            deleteLocation={this.props.deleteLocation} />
                    })
                }
                </div>
            </section>
        )
    }
}

export default withRouter(LocationList)