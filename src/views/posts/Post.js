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
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Carousel from './Carousel';

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
    // const items = [
    //   {
    //     src: require("assets/img/bg1.jpg").default,
    //     altText: "Nature, United States",
    //     caption: "Nature, United States",
    //   },
    //   {
    //     src: require("assets/img/bg3.jpg").default,
    //     altText: "Somewhere Beyond, United States",
    //     caption: "Somewhere Beyond, United States",
    //   },
    //   {
    //     src: require("assets/img/bg4.jpg").default,
    //     altText: "Yellowstone National Park, United States",
    //     caption: "Yellowstone National Park, United States",
    //   },
    // ];
    let items = [];
    if(this.state.post){
      items = this.state.post.images.map((image) => {
        return {src: image.path, altTxt: '', caption: ''};
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
              <Carousel items={items}/>
            </Container>
          </div>
          <DefaultFooter classes="footer-default"/>
        </div>
      </>
    );
  }
}

export default Post;
