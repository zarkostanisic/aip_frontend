/*

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "./index.css";
// pages for this kit
import IndexPage from "views/index/IndexPage";
// import LoginPage from "views/auth/LoginPage";
import Posts from "views/posts/Posts";
import AboutPage from "views/about/AboutPage";
import Post from "views/posts/Post";
import Contact from "views/contact/Contact";
import Error404 from "views/errors/Error404";

import ScrollToTop from "react-scroll-to-top";

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store = {store}>
  <ScrollToTop smooth style={{zIndex: 1000}}/>
  <BrowserRouter>
    <Switch>
      
      <Route path="/" exact render={(props) => <IndexPage {...props} />} />
      {/*<Route
        path="/login"
        render={(props) => <LoginPage {...props} />}
      />*/}
      
      <Route
        path="/posts/:slug?"
        render={(props) => <Posts {...props} />}
      />
      
      <Route
        path="/about"
        render={(props) => <AboutPage {...props} />}
      />
      
      <Route
        path="/contact"
        render={(props) => <Contact {...props} />}
      />
      
      <Route
        path="/post/:id/:slug?"
        render={(props) => <Post {...props} />}
      />
      
      <Route
        path="/404"
        render={(props) => <Error404 {...props} />}
      />
      
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
