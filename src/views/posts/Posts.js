import React, {Component} from "react";
import Pagination from '../../components/Pagination/Pagination';
import API from '../../api/api';
import { Link } from "react-router-dom";
import {getSiteName} from '../../components/Functions/Functions';

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import IndexPageHeader from "components/Headers/IndexPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Spinner from '../../components/Spinner/Spinner';

class Posts extends Component {
  state = {
    posts: [],
    page: 1,
    total: 0,
    perPage: 12,
    pageRragneDisplayed: 3,
    loading: false
  };
  
  getPosts = (page = 1) => {
    const filter = this.props.match.params.slug ? '&slug=' + this.props.match.params.slug : '';
    
    this.setState({loading: true});
    
    API.get('api/app/posts?page=' + page + '&per_page=' + this.state.perPage + filter)
      .then(results => {
        this.setState({
          posts: results.data.data
        });
        
        this.setState({
          total: results.data.meta.total
        });
        
        this.setState({loading: false});
        
        if(this.props.match.params.slug && this.state.posts.length > 0){
          document.title = this.state.posts[0].category.name + ' | Blog | ' + getSiteName();
        }else{
          document.title = 'Blog | ' + getSiteName();
        }
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
    if(this.props.match.params.slug !== prevProps.match.params.slug) {
      
      document.documentElement.classList.remove("nav-open");
      
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
          
            <Card className="card-plain card-blog">
              <Link to={'/post/' + post.id}>
                <div className="postImg" style={{ backgroundImage: `url('${post.images[0]?.path}')` }}></div>
              </Link>
              <div className="author float-right">
                <b>
                  <Link to="/">
                    <span>{post.user.username}</span>
                  </Link>
                  </b>, {post.created_at}
              </div>
              <CardBody>
                <h6 className="category">
                  {post.category.name}
                </h6>
                
                <CardTitle tag="h5">{post.title}</CardTitle>
                <CardText dangerouslySetInnerHTML={{ __html: post.text.substring(0, 200)}}>
                </CardText>
                <Link to={'/post/' + post.id}>Pročitaj</Link>
              </CardBody>
              <CardFooter>
                
              </CardFooter>
            </Card>
        </Col>
      );
    });
    
    return (
      <>
        <DefaultNavbar />
        <div className="wrapper">
          <IndexPageHeader />
          <div className="section section-about-us">
            <Container>
              {!this.state.loading
                ?
                  <h1>{this.props.match.params.slug && this.state.posts.length > 0 ? this.state.posts[0].category.name :'Blog'}</h1>
                : 
                  null
              }
              
              <Row>
                {
                  this.state.loading
                  ?
                    <Col md="12">
                      <Spinner/>
                    </Col>
                  :
                    posts
                }
              </Row>
              
              {
                !this.state.loading
                ?
                  <Pagination 
                    handlePageClick={this.handlePageClick} 
                    pageRragneDisplayed={this.state.pageRragneDisplayed}
                    total={this.state.total}
                    perPage={this.state.perPage}
                  />
                : null
              }
            </Container>
          </div>
          <DefaultFooter classes="footer-default"/>
        </div>
      </>
    );
  }
}

export default Posts;
