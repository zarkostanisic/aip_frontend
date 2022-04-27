import React, {Component} from "react";
import {getSiteName} from '../../components/Functions/Functions';
import API from '../../api/api';

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

import validation from '../../lang/sr/validation';

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import SimpleReactValidator from 'simple-react-validator';

class Contact extends Component {
  
  state = {
    firstFocus: false,
    emailFocus: false,
    full_name: '',
    email: '',
    text: ''
  };
  
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value });
  } 
  
  componentDidMount(){
    
    document.title =  'Kontakt | ' + getSiteName();
    
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  
  componentWillUnmount(){
    
    document.body.classList.remove("contact-page");
    document.body.classList.remove("sidebar-collapse");
  }
  
  setFullNameFocus = (value) => {
    this.setState({firstFocus: value});
  }
  
  setEmailFocus = (value) => {
    this.setState({emailFocus: value});
  }
  
  handleSend = () => {
    if (this.validator.allValid()) {
      const data = {
        full_name: this.state.full_name,
        email: this.state.email,
        text: this.state.text
      };
      
      API.post('api/app/contact', data)
        .then(results => {
          this.setState({
              full_name: '',
              email: '',
              text: ''
          });
          
          alert('Vaša poruka je uspešno poslata!');
          
          window.location.reload();
        });
    } else {
      this.validator.showMessages();

      this.forceUpdate();
    }
  };
  
  componentWillMount() {
    // Serbian
    SimpleReactValidator.addLocale('sr', validation);
    this.validator = new SimpleReactValidator({locale: 'sr'});
  }
  
  render(){
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          
          <div className="section section-contact-us text-center">
            <Container>
              <h2 className="title">Kontakt</h2>
              <p className="description"></p>
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
                      placeholder="Ime i prezime"
                      type="text"
                      name="full_name"
                      onFocus={() => this.setFullNameFocus(true)}
                      onBlur={() => this.setFullNameFocus(false)}
                      value={this.state.full_name} 
                      onChange={this.handleChange}
                    ></Input>
                  </InputGroup>
                  <InputGroup>
                    {this.validator.message('ime i prezime', this.state.full_name, 'required')}
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
                      placeholder="Email"
                      type="text"
                      name="email"
                      onFocus={() => this.setEmailFocus(true)}
                      onBlur={() => this.setEmailFocus(false)}
                      value={this.state.email} 
                      onChange={this.handleChange}
                    ></Input>
                  </InputGroup>
                  <InputGroup>
                    {this.validator.message('email', this.state.email, 'required|email')}
                  </InputGroup>
                  <div className="textarea-container ">
                    <Input
                      cols="80"
                      rows="4"
                      placeholder="Tekst"
                      type="textarea"
                      name="text"
                      value={this.state.text} 
                      onChange={this.handleChange}
                    ></Input>
                    <InputGroup className="pl-0 pt-2">
                      {this.validator.message('tekst', this.state.text, 'required')}
                    </InputGroup>
                  </div>
                  <div className="send-button">
                    <Button
                      type="button"
                      block
                      className="btn-round"
                      color="dark"
                      onClick={this.handleSend}
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
