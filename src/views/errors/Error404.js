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
  
  
  componentDidMount(){
    
    document.title =  '404 | ' + getSiteName();
    
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
  
  render(){
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          
          <div className="section section-contact-us text-center">
            <Container>
              <h2 className="title">Nepostojeća stranica.</h2>
              <p className="description">
                
              </p>
            </Container>
          </div>
          <DefaultFooter classes="footer-default"/>
        </div>
      </>
    );
  }
}

export default Contact;
