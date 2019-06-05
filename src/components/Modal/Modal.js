import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class KennelModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // handleClickYes={this.props.handleClickYes}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Item?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this item?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClickYes}>Yes</Button> 
          <Button onClick={this.props.onHide}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}