import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter
} from "reactstrap";

class ModalClass extends Component {
  state = {
    show: false
  }

  handleToggle = () => {
    let show = !this.state.show;
    this.setState({show: show});
  }

  render(){
    return (
      <>
        
        <Button className="btn-icon btn-round" color="primary" onClick={this.handleToggle}>
          <i className="now-ui-icons location_pin"></i>
        </Button>

        <Modal isOpen={this.state.show} toggle={this.handleToggle}>
          <ModalHeader >
            <big>
              <i className="now-ui-icons location_pin mr-3"></i>
              Lokacija
            </big>
            <button
              aria-label="Close"
              className="close"
              onClick={this.handleToggle}
              type="button"
            >
              <span aria-hidden={true}>×</span>
            </button>
          </ModalHeader>
          <ModalBody>
          {this.props.children}></ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalClass;
