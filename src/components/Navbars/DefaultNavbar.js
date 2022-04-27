import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from '../../api/api';
import {getMainLinks} from '../../components/Functions/Functions';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

const navbarDefaultColor = 'dark';
const navbarTransparentColor = 'navbar-transparent';  

class DefaultNavbar extends Component {
  
  state = {
    navbarColor: navbarTransparentColor,
    collapseOpen: false,
    categories: []
  }
  
  getCategories = (page = 1) => {
    
    API.get('api/app/categories')
      .then(results => {
        this.setState({
          categories: results.data.data
        });
      });
  } 
  
  updateNavbarColor = () => {
    
    if (
      document.documentElement.scrollTop > 399 ||
      document.body.scrollTop > 399
    ) {
      this.setState({
        navbarColor: navbarDefaultColor
      });
    } else if (
      document.documentElement.scrollTop < 400 ||
      document.body.scrollTop < 400
    ) {
      this.setState({
        navbarColor: navbarTransparentColor
      });
    }
  };
  
  setCollapseOpen = (value) => {
    this.setState({collapseOpen: value});
  }
  
  componentDidMount(){
    this.getCategories();
    
    window.addEventListener("scroll", this.updateNavbarColor);
  }
  
  componentWillUnmount(){
      window.removeEventListener("scroll", this.updateNavbarColor);
  }
  
  render(){
    const mainLinks = getMainLinks().map((item, k) => {
      var key = Object.keys(item)[0];
      
      if(key != 'index'){
        item = item[key];
        
        return (
          <NavItem key={k}>
            <NavLink to={item.path} tag={Link}>
                {item.name}
              </NavLink>
          </NavItem>
        );
      }
      
    });
    const categories = this.state.categories.map((category) => {
      return(
        <NavItem key={category.id}>
          <NavLink tag={Link} to={'/posts/' + category.slug}>
            {category.name}
          </NavLink>
        </NavItem>
      );
    });
    
    return (
      <>
        {this.state.collapseOpen ? (
          <div
            id="bodyClick"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              this.setCollapseOpen(false);
            }}
          />
        ) : null}
        <Navbar className={"fixed-top " + this.state.navbarColor} color={navbarDefaultColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/" tag={Link}
                id="navbar-brand"
              >
                
                <img src={require("assets/img/logo.png").default} width="46" alt=""/>
              </NavbarBrand>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  this.setCollapseOpen(!this.state.collapseOpen);
                }}
                aria-expanded={this.state.collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              isOpen={this.state.collapseOpen}
              navbar
            >
              <Nav navbar>
              
              {categories}
              
              {mainLinks}
                
                <NavItem>
                  <NavLink
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="twitter-tooltip"
                  >
                    <i className="fab fa-twitter"></i>
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </NavLink>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="facebook-tooltip"
                  >
                    <i className="fab fa-facebook-square"></i>
                    <p className="d-lg-none d-xl-none">Facebook</p>
                  </NavLink>
                  <UncontrolledTooltip target="#facebook-tooltip">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    id="instagram-tooltip"
                  >
                    <i className="fab fa-instagram"></i>
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                  <UncontrolledTooltip target="#instagram-tooltip">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default DefaultNavbar;
