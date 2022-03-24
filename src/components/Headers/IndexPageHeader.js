import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {

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
            <h1 className="title">Slogan.</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
