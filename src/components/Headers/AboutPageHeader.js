import React, {Component} from "react";
import API from '../../api/api';

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Col
} from "reactstrap";

// core components

class AboutPageHeader extends Component {
  state = {
    statistics: null
  };
  
  getStatistics = () => {
    API.get('api/app/statistics')
      .then(result => {
        this.setState({statistics: result.data});
      });
  }

  componentDidMount(){
    this.getStatistics()
  }
  
  render(){
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
          ></div>
          <Container>
          <Col className="ml-auto mr-auto" md="4">
            <Card className="card-login card-plain">
                <CardHeader className="text-center">
                  <div>
                    <img style={{width: "40%"}}
                      alt="..."
                      src={require("assets/img/logo.png").default}
                    ></img>
                  </div>
                </CardHeader>
              </Card>
            </Col>
            <div className="content">
              <div className="social-description">
                <h2>{this.state.statistics?.posts}</h2>
                <p>Objava</p>
              </div>
              <div className="social-description">
                <h2>{this.state.statistics?.comments}</h2>
                <p>Komentara</p>
              </div>
              {/*<div className="social-description">
                <h2>{this.state.statistics?.images}</h2>
                <p>Slika</p>
              </div>*/}
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AboutPageHeader;
