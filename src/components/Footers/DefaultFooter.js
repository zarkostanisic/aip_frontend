/*eslint-disable*/
import React, {Component} from "react";
import {Link} from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

// core components

class DefaultFooter extends Component {
  render(){
    return (
      <>
        <footer className={'footer ' + this.props.classes}>
          <Container>
            <nav>
              <ul>
                <li>
                  <Link to="/">AIP</Link>
                </li>
                
                <li>
                  <Link to="/posts">Blog</Link>
                </li>
                
                <li>
                  <Link to="/about">O nama</Link>
                </li>
                
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
              </ul>
            </nav>
            <div className="copyright" id="copyright">
              © {new Date().getFullYear()},
              <Link to="/">&nbsp;AIP</Link>
              .
            </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default DefaultFooter;
