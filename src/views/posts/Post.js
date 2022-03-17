import React, {Component} from "react";
import Pagination from '../../components/Pagination/Pagination';
import API from '../../api/api';
import "react-image-gallery/styles/css/image-gallery.css";

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
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ImageGallery from 'react-image-gallery';

class Post extends Component {
  state = {
    post: null
  }
  
  getPost = () => {
    
    var result = API.get('api/app/post/' + this.props.match.params.id)
      .then(result => {
        
        this.setState({
          post: result.data.data
        });
      });
  } 
  
  componentDidMount(){
    this.getPost();
    
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  
  componentWillUnmount(){
    document.body.classList.remove("landing-page");
    document.body.classList.remove("sidebar-collapse");
  }
  
  render(){
    let items = [];
    if(this.state.post){
      items = this.state.post.images.map((image) => {
        return {original: image.path, thumbnail: image.path};
      });
    }
    
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          
          <div className="section">
            <Container>
              <h3 className="title">{this.state.post?.title}</h3>
              <h5 className="description">
                {this.state.post?.text}
              </h5>
            </Container>
          </div>
          
          <div className="section">
            <Container>
              <Row className="justify-content-center">
                <Col lg="8" md="12">
                  <ImageGallery items={items} />
                </Col>
              </Row>
            </Container>
          </div>
          <DefaultFooter classes="footer-default"/>
        </div>
      </>
    );
  }
}

export default Post;
