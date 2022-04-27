import React, {Component} from 'react';
import API from '../../api/api';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import Spinner from '../../components/Spinner/Spinner';

class Team extends Component{
  state = {
    team: [],
    loading: false
  };
  
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
  }
  
  render(){
    const team = this.state.team.map((person) => {
      let social_networks = '';
      
      if(person.social_networks){
        const networks = JSON.parse(person.social_networks);
        const keys = Object.keys(networks);
        
        social_networks = keys.map((key, i) => {
          let pattern = '';
          let value = networks[key];
          
          if(key == 'viber'){
            pattern = 'viber://chat?number=';
            value = encodeURIComponent(value);
          }else if(key == 'whatsapp'){
            pattern = 'whatsapp://send?phone=';
            value = encodeURIComponent(value);
          }

          return <Button key={i}
              className="btn-icon btn-round"
              color="dark"
              href={pattern + value}
              target="_blank"
            >
              <i className={'fab fa-' + key}></i>
            </Button>;
        });
      }
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
            
            {social_networks}
          </div>
        </Col>
      );
    });
    
    return(
      <div className="section  section-team text-center pt-2">
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
    );
  }
}

export default Team;
