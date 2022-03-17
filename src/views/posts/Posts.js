import React, {Component} from "react";
import Pagination from '../../components/Pagination/Pagination';
import API from '../../api/api';

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

class LandingPage extends Component {
  state = {
    posts: [],
    page: 1,
    total: 0,
    perPage: 1,
    pageRragneDisplayed: 3
  };
  
  getPosts = (page = 1) => {
    const filter = this.props.match.params.category_id ? '&category_id=' + this.props.match.params.category_id : '';
    
    var results = API.get('api/app/posts?page=' + page + '&per_page=' + this.state.perPage + filter)
      .then(results => {
        this.setState({
          posts: results.data.data
        });
        
        this.setState({
          total: results.data.meta.total
        });
      });
  } 
  
  handlePageClick = (event) => {
    const page = event.selected + 1;
    
    this.setState({page: page});

    this.getPosts(page);
  }
  
  componentDidMount(){
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    
    this.getPosts();
  }
  
  componentDidUpdate = (prevProps) => {
    if(this.props.match.params.category_id !== prevProps.match.params.category_id ) {

      this.getPosts();
   };
  };
  
  componentWillUnmount(){
    document.body.classList.remove("landing-page");
    document.body.classList.remove("sidebar-collapse");
  }
  
  render(){
    const posts = this.state.posts.map((post) => {
      return(
        <Col md="4" key={post.id}>
          <Card>
            <div className="postImg" style={{ backgroundImage: `url('${post.images[0]?.path}')` }}></div>
            <CardBody>
              <CardTitle tag="h4">{post.title}</CardTitle>
              <CardText>
                {post.text}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      );
    });
    
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <LandingPageHeader />
          <div className="section section-about-us">
            <Container>
              <Row>
                {posts}
              </Row>
              <Pagination 
                handlePageClick={this.handlePageClick} 
                pageRragneDisplayed={this.state.pageRragneDisplayed}
                total={this.state.total}
                perPage={this.state.perPage}
              />
            </Container>
          </div>
          <DefaultFooter />
        </div>
      </>
    );
  }
}

export default LandingPage;
