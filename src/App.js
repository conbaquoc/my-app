import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import login from './component/login'
import logout from './component/logout'
import admin from './component/admin'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login} />
        <Route path="/admin" component={admin}/>
        <Route path="/logout" component={logout}/>
      </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
