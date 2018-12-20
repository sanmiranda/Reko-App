import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/auth/Profile';
import RekoList from './components/rekos/RekoList';


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/rekos" component={RekoList}/>
    </Switch>
  )
}

export default Routes