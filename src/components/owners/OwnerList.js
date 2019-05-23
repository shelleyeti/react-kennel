import React, { Component } from 'react'
import { withRouter } from 'react-router'
import OwnerItem from "./OwnerItem"
import "./Owner.css"

class OwnerList extends Component {
    
    render() {
        return (
            <section className="Owners">
                <div className="ownerButton">
                    <button type="button" className="btn btn-outline-success"
                            onClick={() => {
                                this.props.history.push("/owners/new")}
                            }>Add Employee</button>
                </div>
                <h1>Owner List</h1>
                <div className="d-flex justify-content-center row">
                {
                    this.props.owners.map(item => {
                        return <OwnerItem key={item.id} owner={item}
                            deleteOwner={this.props.deleteOwner} />
                    })
                }
                </div>
            </section>
        )
    }
}

export default withRouter(OwnerList)