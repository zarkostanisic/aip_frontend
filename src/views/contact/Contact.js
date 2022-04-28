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
  Col,
  Alert
} from "reactstrap";

import validation from '../../lang/sr/validation';
import {Helmet} from 'react-helmet';

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import SimpleReactValidator from 'simple-react-validator';

class Contact extends Component {
    constructor(props) {
      super(props);
      this.onDismiss = this.onDismiss.bind(this);
  }
  
  state = {
    firstFocus: false,
    emailFocus: false,
    full_name: '',
    email: '',
    text: '',
    loading: false,
    sent: false,
    pageTitle: 'Kontakt | ' + getSiteName()
  };
  
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value });
  } 
  
  onDismiss(){
      this.setState({sent: !this.state.sent});
  }
  
  componentDidMount(){
    
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
    this.setState({sent: false});
    
    if (this.validator.allValid()) {
      this.setState({loading: true});
      
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
        
          this.setState({loading: false, sent: true});
          
          this.forceUpdate(); 
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
        <Helmet>
          <title>{this.state.pageTitle}</title>
        </Helmet>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          
          <div className="section section-contact-us text-center">
            <Container>
              <h2 className="title">Kontakt</h2>
              <p className="description"></p>
              <Row>
                <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                  <Alert color="success" isOpen={this.state.sent}>
                    <div className="container">
                      Vaša poruka je uspešno poslata!
                      <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={this.onDismiss}
                      >
                        <span aria-hidden="true">
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        </span>
                      </button>
                    </div>
                  </Alert>
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
                      className="btn-round"
                      color="dark"
                      onClick={this.handleSend}
                      size="lg"
                      disabled={this.state.loading}
                    >
                      { this.state.loading 
                        ?
                          <div className="spinner-border spinner-border-sm" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        : null
                      }
                      Pošalji poruku
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
