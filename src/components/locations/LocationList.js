import React, { Component } from 'react'
import LocationItem from "./LocationItem"
import "./Location.css"

class LocationList extends Component {
    
    render() {
        return (
            <section className="Location">
                <h1>Location List</h1>
                {
                    this.props.locations.map(item => {
                        return <LocationItem key={item.id} location={item}
                            deleteLocation={this.props.deleteLocation} />
                    })
                }
            </section>
        )
    }
}

export default LocationList