import React, {Component} from "react";
import API from '../../api/api';
import {getSiteName} from '../../components/Functions/Functions';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import AboutPageHeader from "components/Headers/AboutPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Spinner from '../../components/Spinner/Spinner';

class AboutPage extends Component {
  
  state = {
    team: [],
    loading: false
  }
  
  getTeam = () => {
    this.setState({loading: true});
    
    API.get('api/app/team')
      .then(results => {
        this.setState({
          team: results.data.data
        });
        
        this.setState({loading: false});
      });
  } 
  
  componentDidMount(){
    this.getTeam();
    
    document.title =  'O nama | ' + getSiteName();
    
    document.body.classList.add("about-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  
  
  componentWillUnmount(){
    
    document.body.classList.remove("about-page");
    document.body.classList.remove("sidebar-collapse");
  }
  
  render(){
    const team = this.state.team.map((person) => {
      return (
        
        <Col md="4" key={person.id}>
          <div className="team-player">
            <img
              alt="..."
              className="rounded-circle img-fluid img-raised"
              src={person.image}
            ></img>
            <h4 className="title">{person.first_name} {person.last_name}</h4>
            <p className="description">
              {person.about}
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
      );
    });
    
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <AboutPageHeader />
          <div className="section">
            <Container>
              <h3 className="title">O nama</h3>
              <h5 className="description">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
              </h5>
            </Container>
          </div>
          
          <div className="section  section-team text-center">
            <Container>
              <h2 className="title">Tim</h2>
              <div className="team">
                <Row>
                  {
                    this.state.loading
                    ?
                      <Col md="12"><Spinner/></Col>
                    :
                      team
                  }
                </Row>
              </div>
            </Container>
          </div>
          
          <DefaultFooter />
        </div>
      </>
    );
  }
}

export default AboutPage;
