import React, { Component } from 'react'
import OwnerItem from "./OwnerItem"
import "./Owner.css"

class OwnerList extends Component {
    
    render() {
        return (
            <section className="Owners">
                <h1>Owner List</h1>
                {
                    this.props.owners.map(item => {
                        return <OwnerItem key={item.id} owner={item}
                            deleteOwner={this.props.deleteOwner} />
                    })
                }
            </section>
        )
    }
}

export default OwnerList