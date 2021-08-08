import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

export default class login extends Component {
  render() {
    return (
      <Modal.Dialog>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}
