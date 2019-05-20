// import React, { Component } from 'react'


// export default class LocationList  extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Location List</h1>
//                 <h5>{this.props.title}</h5>
//                 <section>North Nashville</section>
//                 <section>South Nashville</section>
//                 <section>East Nashville</section>
//             </article>
//         );
//     }
// }

import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            <h1>Current Locations</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList