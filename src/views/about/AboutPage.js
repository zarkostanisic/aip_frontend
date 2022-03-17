import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import AboutPageHeader from "components/Headers/AboutPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function AboutPage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <DefaultNavbar />
      <div className="wrapper">
        <AboutPageHeader />
        <div className="section">
          <Container>
            <h3 className="title">O nama</h3>
            <h5 className="description">
              Text
            </h5>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default AboutPage;
