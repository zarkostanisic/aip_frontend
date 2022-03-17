import React, {Component} from "react";
import API from '../../api/api';

import { connect } from 'react-redux'
import { login } from '../../actions';

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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

import SimpleReactValidator from 'simple-react-validator';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    usernameFocus: false,
    passwordFocus: false
  }
  
  handleLogin = () => {
    if (this.validator.allValid()) {
      var results = API.post('api/login', {username: this.state.username, password: this.state.password, type: 'cms'})
        .then(result => {
          localStorage.setItem('token', result.data.token);
          this.props.login(result.data.user);
          this.props.history.push('/');
        });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  };
  
  handleGetUser = () => {
    
    var results = API.get('api/user')
      .then(result => {
        this.props.login(result.data.data);
      });
  };
  
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value });
  } 
  
  componentDidMount(){
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    
    if(localStorage.token){
      this.handleGetUser();
      
      if(this.props.user?.id){
        this.props.history.push('/');
      }else{
        // props.history.push('/login');
      }
    }
  }
  
  componentWillUnmount(){
    document.body.classList.remove("login-page");
    document.body.classList.remove("sidebar-collapse");
  }
  
  componentWillMount() {
    // Serbian
    SimpleReactValidator.addLocale('sr', {
      accepted             : 'Polje :attribute mora biti prihvaćeno.',
      after                : 'Polje :attribute mora biti nakon :date.',
      after_or_equal       : 'Polje :attribute mora biti nakon ili na :date.',
      alpha                : 'Polje :attribute može sadržati samo slova.',
      alpha_space          : 'Polje :attribute može sadržati samo slova i razmake.',
      alpha_num            : 'Polje :attribute može sadržati samo slova i brojeve.',
      alpha_num_space      : 'Polje :attribute može sadržati samo slova, brojeve i razmake.',
      alpha_num_dash       : 'Polje :attribute može sadržati samo slova, brojeve i crte.',
      alpha_num_dash_space : 'Polje :attribute može sadržati samo slova, brojeve, crte i razmake.',
      array                : 'Polje :attribute mora biti niz.',
      before               : 'Polje :attribute mora biti pre :date.',
      before_or_equal      : 'Polje :attribute mora biti pre ili na :date.',
      between              : 'Polje :attribute mora biti između :min i :max:type.',
      boolean              : 'Polje :attribute mora biti istinitosna vrednost.',
      card_exp             : 'Polje :attribute mora biti validan datum isteka.',
      card_num             : 'Polje :attribute mora biti validan broj kreditne kartice.',
      currency             : 'Polje :attribute mora biti validna valuta.',
      date                 : 'Polje :attribute mora biti datum.',
      date_equals          : 'Polje :attribute mora biti na :date.',
      email                : 'Polje :attribute mora biti validna email adresa.',
      in                   : 'Izabrano polje :attribute mora biti :values.',
      integer              : 'Polje :attribute mora biti ceo broj.',
      max                  : 'Polje :attribute ne sme biti veće od :max:type.',
      min                  : 'Polje :attribute mora biti veće od :min:type.',
      not_in               : 'Izabrano polje :attribute ne sme biti :values.',
      not_regex            : 'Polje :attribute ne sme biti u određenom formatu.',
      numeric              : 'Polje :attribute mora biti broj.',
      phone                : 'Polje :attribute mora biti validan broj telefona.',
      regex                : 'Polje :attribute mora biti u određenom formatu.',
      required             : 'Polje :attribute je obavezno.',
      size                 : 'Polje :attribute mora biti :size:type.',
      string               : 'Polje :attribute mora biti niska.',
      typeof               : 'Polje :attribute nije ispravan tip :type.',
      url                  : 'Polje :attribute mora biti URL.',
    });
    this.validator = new SimpleReactValidator({locale: 'sr'});
  }
  
  setUsernameFocus = (value) => {
    this.setState({
      usernameFocus: value
    });
  }
  
  setPasswordFocus = (value) => {
    this.setState({
      passwordFocus: value
    });
  }
  
  render(){
    
    return (
      <>
        <ExamplesNavbar />
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/visocica.jpg").default + ")",
            }}
          ></div>
          <div className="content">
            <Container>
              <Col className="ml-auto mr-auto" md="8">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div>
                        <img style={{width: "40%"}}
                          alt="..."
                          src={require("assets/img/now-logo-back.png").default}
                        ></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                        "no-border input-lg" +
                          (this.state.usernameFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Korisničko ime"
                          type="text"
                          name="username"
                          value={this.state.username} 
                          onChange={this.handleChange}
                          onFocus={() => this.setUsernameFocus(true)}
                          onBlur={() => this.setUsernameFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup>
                        {this.validator.message('username', this.state.username, 'required|alpha')}
                      </InputGroup>
                      <InputGroup
                        className={
                            "no-border input-lg" +
                            (this.state.passwordFocus ? " input-group-focus" : "")
                          }
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Lozinka"
                          type="text"
                          name="password"
                          value={this.state.password} 
                          onChange={this.handleChange}
                          onFocus={() => this.setPasswordFocus(true)}
                          onBlur={() => this.setPasswordFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup>
                        {this.validator.message('password', this.state.password, 'required|alpha')}
                      </InputGroup>
                      <InputGroup>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={this.handleLogin}
                        size="lg"
                      >
                        Uloguj se
                      </Button>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
          <TransparentFooter />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.user
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      login: (user) => dispatch(login(user)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
