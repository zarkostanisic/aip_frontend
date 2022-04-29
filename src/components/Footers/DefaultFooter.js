/*eslint-disable*/
import React, {Component} from "react";
import {Link} from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";
import {getMainLinks} from '../../components/Functions/Functions';

// core components

class DefaultFooter extends Component {
  render(){
    const mainLinks = getMainLinks().map((item, k) => {
      var key = Object.keys(item)[0];
      item = item[key];
      
      return (
        <li key={k}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      );
      
    });
    
    return (
      <>
        <footer className={'footer ' + this.props.classes}>
          <Container>
            <nav>
              <ul>
                {mainLinks}
              </ul>
            </nav>
            <div className="copyright" id="copyright">
              © {new Date().getFullYear()},
              <Link to="/">
                <img
                  alt="Avanturisti izazovne prirode"
                  src={require("assets/img/logo-positive.svg").default} 
                  width="46"
                />
              </Link>
            </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default DefaultFooter;
