import React from "react";
import API from '../../api/api';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components

function AboutPageHeader() {
  let pageHeader = React.createRef();
  const [statistics, setStatistics] = React.useState(null);
  const [first, setFirst] = React.useState(true);
  
  const getStatistics = () => {
    var result = API.get('api/app/statistics')
      .then(result => {
        setStatistics(result.data);
        setFirst(false)
      });
  }

  React.useEffect(() => {
    if(first){
      getStatistics();
    }
    
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/trem.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
        <Col className="ml-auto mr-auto" md="4">
          <Card className="card-login card-plain">
              <CardHeader className="text-center">
                <div>
                  <img style={{width: "40%"}}
                    alt="..."
                    src={require("assets/img/now-logo-back.png").default}
                  ></img>
                </div>
              </CardHeader>
            </Card>
          </Col>
          <div className="content">
            <div className="social-description">
              <h2>{statistics?.posts}</h2>
              <p>Objava</p>
            </div>
            <div className="social-description">
              <h2>{statistics?.comments}</h2>
              <p>Komentara</p>
            </div>
            <div className="social-description">
              <h2>{statistics?.images}</h2>
              <p>Slika</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutPageHeader;
