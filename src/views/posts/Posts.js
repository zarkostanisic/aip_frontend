import React from "react";
import ReactPaginate from 'react-paginate';

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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  
  const handlePageClick = (event) => {
    const offset = (event.selected * 5) % 100;
    
    alert(offset);
  }
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col md="4">
                <Card>
                  <CardImg alt="..." src={require("assets/img/visocica.jpg").default} top></CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              
              <Col md="4">
                <Card>
                  <CardImg alt="..." src={require("assets/img/visocica.jpg").default} top></CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              
              <Col md="4">
                <Card>
                  <CardImg alt="..." src={require("assets/img/visocica.jpg").default} top></CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <ReactPaginate
               breakLabel="..."
               nextLabel="next"
               onPageChange={handlePageClick}
               pageRangeDisplayed={5}
               pageCount={100}
               previousLabel="previous"
               renderOnZeroPageCount={null}
               className="pagination justify-content-center"
               pageClassName="page-item"
               pageLinkClassName="page-link"
               activeClassName="active"
               activeLinkClassName="active"
               previousClassName="page-item"
               nextClassName="page-item"
               previousLinkClassName="page-link"
               nextLinkClassName="page-link"
             />
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
