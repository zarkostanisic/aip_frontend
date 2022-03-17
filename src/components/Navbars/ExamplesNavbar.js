import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from '../../api/api';

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

class ExamplesNavbar extends Component {
  
  state = {
    navbarColor: 'navbar-transparent',
    collapseOpen: false,
    categories: []
  }
  
  getCategories = (page = 1) => {
    
    var results = API.get('api/app/categories')
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
        navbarColor: ''
      });
    } else if (
      document.documentElement.scrollTop < 400 ||
      document.body.scrollTop < 400
    ) {
      this.setState({
        navbarColor: 'navbar-transparent'
      });
    }
  };
  
  componentDidMount(){
    this.getCategories();
    
    window.addEventListener("scroll", this.updateNavbarColor);
  }
  
  componentWillUnmount(){
      window.removeEventListener("scroll", this.updateNavbarColor);
  }
  
  render(){
    const categories = this.state.categories.map((category) => {
      return(
        <DropdownItem tag={Link} to={'/posts/' + category.id} key={category.id}>
          {category.name}
        </DropdownItem>
      );
    });
    
    return (
      <>
        {this.state.collapseOpen ? (
          <div
            id="bodyClick"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              this.setState({collapseOpen: false});
            }}
          />
        ) : null}
        <Navbar className={"fixed-top " + this.state.navbarColor} color="info" expand="lg">
          <Container>
            <UncontrolledDropdown className="button-dropdown">
              <DropdownToggle
                caret
                data-toggle="dropdown"
                id="navbarDropdown"
                tag="a"
                onClick={(e) => e.preventDefault()}
              >
                <span className="button-bar"></span>
                <span className="button-bar"></span>
                <span className="button-bar"></span>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdown">
                {categories}
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="navbar-translate">
              <NavbarBrand
                href="/"
                id="navbar-brand"
              >
                AIP
              </NavbarBrand>
              <UncontrolledTooltip target="#navbar-brand">
                Designed by Invision. Coded by Creative Tim
              </UncontrolledTooltip>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  this.setState({collapseOpen: !this.state.collapseOpen});
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
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                      AIP
                    </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                      Onama
                    </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink to="/posts" tag={Link}>
                      Blog
                    </NavLink>
                </NavItem>
                
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

export default ExamplesNavbar;
