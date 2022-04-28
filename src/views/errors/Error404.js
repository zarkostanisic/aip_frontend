import React, {Component} from "react";
import {getSiteName} from '../../components/Functions/Functions';

// reactstrap components
import {
  Container
} from "reactstrap";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import {Helmet} from 'react-helmet';

class Contact extends Component {
  state = {
    pageTitle: '404 | ' + getSiteName()
  };
  
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
