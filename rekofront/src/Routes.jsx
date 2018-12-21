import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/auth/Profile';
import RekoList from './components/rekos/RekoList';
import ListCategories from './components/categories/ListCategories';
import ClubList from './components/clubs/ClubList';
import AddCategory from './components/categories/AddCategory';
import AddClub from './components/clubs/AddClub';
import AddReko from './components/rekos/AddReko';


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/rekos" component={RekoList}/>
      <Route path="/categories" component={ListCategories}/>
      <Route path="/clubs" component={ClubList}/>
      <Route path="/addcategories" component={AddCategory}/>
      <Route path="/addclubs" component={AddClub}/>
      <Route path="/addrekos" component={AddReko}/>
    </Switch>
  )
}

export default Routes