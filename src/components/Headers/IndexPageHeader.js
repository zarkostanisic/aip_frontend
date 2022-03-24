import React, {Component} from "react";

// reactstrap components
import { Container } from "reactstrap";

import {getSlogan} from '../../components/Functions/Functions';

class IndexHeader extends Component{
  
  render(){
    return (
      <>
        <div className="page-header page-header-small">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/trem.jpg").default + ")",
            }}
          ></div>
          <div className="content-center">
            <Container>
              <h1 className="title">{getSlogan()}</h1>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default IndexHeader;
