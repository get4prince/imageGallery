import React, { Component } from "react"
import { Modal, ModalHeader } from "reactstrap"

// class ImageModal extends Component {
function ImageModal(props) {
  const externalCloseBtn = () => {
    return (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={props.toggle}
      >
        &times;
      </button>
    )
  }
  return (
    <Modal
      size="lg"
      className="modal-dialog-centered "
      isOpen={props.modal}
      toggle={props.toggle}
      external={externalCloseBtn()}
    >
      <img style={{ margin: "0px" }} src={props.url} />
    </Modal>
  )
}

export default ImageModal
