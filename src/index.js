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
import Index from "views/index/LandingPage";
import LoginPage from "views/auth/LoginPage.js";
import Posts from "views/posts/Posts.js";

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/login"
        render={(props) => <LoginPage {...props} />}
      />
      
      <Route
        path="/posts/:category_id"
        render={(props) => <Posts {...props} />}
      />
      
      <Route
        path="/posts"
        render={(props) => <Posts {...props} />}
      />
      
      <Redirect to="/index" />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
