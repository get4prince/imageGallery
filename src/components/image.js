import React , {Component} from "react";
import { Modal , ModalHeader } from "reactstrap";

class ImageModal extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.props.toggle}>&times;</button>;
    return(
      <Modal className="modal-dialog-centered bd-example-modal-xl" isOpen={this.props.modal} toggle={this.props.toggle} external={externalCloseBtn}>
        <img style={{margin: "0px"}} src={this.props.url}/>
      </Modal>
    );
  }
}

export default ImageModal;
