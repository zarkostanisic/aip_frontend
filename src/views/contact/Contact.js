import React, {Component} from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

class Contact extends Component {
  
  state = {
    firstFocus: false,
    emailFocus: false,
    prevTitle: ''
  };
  
  componentDidMount(){
    
    this.setState({prevTitle: document.title});
    document.title =  'Kontakt | ' + document.title;
    
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  
  componentWillUnmount(){
    document.title = this.state.prevTitle;
    
    document.body.classList.remove("contact-page");
    document.body.classList.remove("sidebar-collapse");
  }
  
  setFirstFocus = (value) => {
    this.setState({firstFocus: value});
  }
  
  setEmailFocus = (value) => {
    this.setState({emailFocus: value});
  }
  
  render(){
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          
          <div className="section section-contact-us text-center">
            <Container>
              <h2 className="title">Kontakt?</h2>
              <p className="description">Your project is very important to us.</p>
              <Row>
                <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                  <InputGroup
                    className={
                      "input-lg" + (this.state.firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => this.setFirstFocus(true)}
                      onBlur={() => this.setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "input-lg" + (this.state.emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      name="email"
                      onFocus={() => this.setEmailFocus(true)}
                      onBlur={() => this.setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <div className="textarea-container">
                    <Input
                      cols="80"
                      name="name"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                    ></Input>
                  </div>
                  <div className="send-button">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <DefaultFooter classes="footer-default"/>
        </div>
      </>
    );
  }
}

export default Contact;
