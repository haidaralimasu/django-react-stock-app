import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './core/Home'
import About from './core/About'
import Blog from './core/Blog'
import BlogDetail from './core/BlogDetail'
import News from './core/News'

import Signin from './user/Signin'
import Signup from './user/Signup'


 
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/signin" exact component={Signin} />
        <Route path="/" exact component={Home} />


        <Route path="/signup" exact component={Signup} />
        
        <Route path="/about" exact component={About} />
        <Route path="/news" exact component={News} />

        <Route path="/blog" exact component={Blog} />
        <Route  path='/blog/:id'  exact component={BlogDetail} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
