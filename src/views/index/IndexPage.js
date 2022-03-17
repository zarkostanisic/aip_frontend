import React, {Component} from "react";

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
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

class IndexPage extends Component {
  
  state = {
    firstFocus: false,
    emailFocus: false
  };
  
  componentDidMount(){
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  
  componentWillUnmount(){
    document.body.classList.remove("landing-page");
    document.body.classList.remove("sidebar-collapse");
  }
  
  setFirstFocus = (value) => {
    this.setState({firstFocus: value});
  }
  
  setEmailFocus = (value) => {
    this.setState({emailFocus: value});
  }
  
  render(){
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          <div className="section section-about-us">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Ko smo mi?</h2>
                  <h5 className="description">
                    Neki text:)
                  </h5>
                </Col>
              </Row>
              <div className="separator separator-primary"></div>
              <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/login.jpg").default + ")",
                      }}
                    >
                      <p className="blockquote blockquote-info">
                        "Over the span of the satellite record, Arctic sea ice has
                        been declining significantly, while sea ice in the
                        Antarctichas increased very slightly" <br></br>
                        <br></br>
                        <small>-NOAA</small>
                      </p>
                    </div>
                    <div
                      className="image-container"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg3.jpg").default + ")",
                      }}
                    ></div>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/visocica.jpg").default + ")",
                      }}
                    ></div>
                    <h3>
                      So what does the new record for the lowest level of winter
                      ice actually mean
                    </h3>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions of
                      the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds of
                      natural reasons, there’s huge variety of the state of the
                      ice.
                    </p>
                    <p>
                      For a start, it does not automatically follow that a record
                      amount of ice will melt this summer. More important for
                      determining the size of the annual thaw is the state of the
                      weather as the midnight sun approaches and temperatures
                      rise. But over the more than 30 years of satellite records,
                      scientists have observed a clear pattern of decline,
                      decade-by-decade.
                    </p>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions of
                      the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds of
                      natural reasons, there’s huge variety of the state of the
                      ice.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="section section-team text-center">
            <Container>
              <h2 className="title">Tim</h2>
              <div className="team">
                <Row>
                  <Col md="4">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/avatar.jpg").default}
                      ></img>
                      <h4 className="title">Text</h4>
                      <p className="category text-info">Text</p>
                      <p className="description">
                        Text
                      </p>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/ryan.jpg").default}
                      ></img>
                      <h4 className="title">Text</h4>
                      <p className="category text-info">Text</p>
                      <p className="description">
                        Text
                      </p>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/eva.jpg").default}
                      ></img>
                      <h4 className="title">Text</h4>
                      <p className="category text-info">Text</p>
                      <p className="description">
                        Text
                      </p>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-youtube"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="section section-contact-us text-center">
            <Container>
              <h2 className="title">Kontakt?</h2>
              <p className="description">Your project is very important to us.</p>
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
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => this.setFirstFocus(true)}
                      onBlur={() => this.setFirstFocus(false)}
                    ></Input>
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
                      placeholder="Email..."
                      type="text"
                      name="email"
                      onFocus={() => this.setEmailFocus(true)}
                      onBlur={() => this.setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <div className="textarea-container">
                    <Input
                      cols="80"
                      name="name"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                    ></Input>
                  </div>
                  <div className="send-button">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
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

export default IndexPage;
