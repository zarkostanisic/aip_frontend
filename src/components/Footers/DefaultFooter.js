/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter(props) {
  return (
    <>
      <footer className={'footer ' + props.classes}>
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/">AIP</Link>
              </li>
              <li>
                <Link to="/about">O nama</Link>
              </li>
              <li>
                <Link to="/posts">Blog</Link>
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

export default DefaultFooter;
