import React, {Component} from "react";
import API from '../../api/api';
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import {getSiteName} from '../../components/Functions/Functions';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ImageGallery from 'react-image-gallery';

import ShareButtons from '../../components/ShareButtons/ShareButtons';
// import Map from '../../components/Map/Map';

class Post extends Component {
  state = {
    post: null
  }
  
  getPost = () => {
    
    API.get('api/app/post/' + this.props.match.params.id)
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
      
      document.title = this.state.post.title + ' | ' + this.state.post.category.name + ' | ' + getSiteName();
    }
    
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          
          <div className="section pb-3">
            <Container>
              
              <Row>
                <Col md="12">
                  <h5 className="category pull-left">
                    {this.state.post?.category.name}
                  </h5>
                  <div className="author pull-right">
                    <b>
                      <Link to="/">
                        <span>{this.state.post?.user.username}</span>
                      </Link>
                      </b>, {this.state.post?.created_at}
                  </div>
                </Col>
                
                <Col md="12">
                  <div className="pull-right mb-1">
                      <ShareButtons/>
                  </div>
                </Col>
                
                <Col md="12">
                  <h3 className="title">{this.state.post?.title}</h3>
                </Col>
                
                <Col md="12" dangerouslySetInnerHTML={{ __html: this.state.post?.text}}></Col>
              </Row>
            </Container>
          </div>
          
          {items.length > 0
            ?
              <div className="section pt-3">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg="8" md="12">
                      <ImageGallery items={items} />
                    </Col>
                  </Row>
                </Container>
              </div>
            :
              null
          }
          <DefaultFooter classes="footer-default"/>
        </div>
      </>
    );
  }
}

export default Post;
