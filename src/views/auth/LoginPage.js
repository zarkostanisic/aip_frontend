import React, {Component} from "react";
import API from '../../api/api';
import {getSiteName} from '../../components/Functions/Functions';

import { connect } from 'react-redux'
import { login } from '../../actions';

import validation from '../../lang/sr/validation';

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
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import SimpleReactValidator from 'simple-react-validator';
import {Helmet} from 'react-helmet';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    usernameFocus: false,
    passwordFocus: false,
    pageTitle: 'Login | ' + getSiteName()
  }
  
  handleLogin = () => {
    if (this.validator.allValid()) {
      API.post('api/login', {username: this.state.username, password: this.state.password, type: 'cms'})
        .then(result => {
          localStorage.setItem('token', result.data.token);
          this.props.login(result.data.user);
          this.props.history.push('/');
        });
    } else {
      this.validator.showMessages();

      this.forceUpdate();
    }
  };
  
  handleGetUser = () => {
    
    API.get('api/user')
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
    SimpleReactValidator.addLocale('sr', validation);
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
        <Helmet>
          <title>{this.state.pageTitle}</title>
        </Helmet>
        <DefaultNavbar />
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
                          src={require("assets/img/logo.png").default}
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
                        {this.validator.message('password', this.state.password, 'required|alpha_num')}
                      </InputGroup>
                      <InputGroup>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="dark"
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
          <DefaultFooter/>
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
