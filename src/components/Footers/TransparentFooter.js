/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">AIP</Link>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                O nama
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},
          <a
            href="#"
            target="_blank"
          >
            &nbsp;AIP
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
