import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
  Card, Icon, Avatar, List, Button,Row,Col 
 } from 'antd';


class UserList extends Component {

  state = {
    list: [],
  }

  getUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        this.setState({list: response.data})
      })
      .catch(e => console.log(e))
  }

    componentDidMount(){
      this.getUsers()
    }

    render() {
      return (
        <div className='homestyle'>
            {this.state.list.map((user, index)=>{
              return( <Card style={{width:500}}
                key={user._id}>
                  <img alt="profPic" style={{width:70}} src={user.img} />
                  <Link to={`/profile/${user._id}`}>
                  <h3>Usuario : {user.username}</h3>
                  </Link> 
                  <h4>Nombre : {user.name}</h4>
                  <h3>Apellido : {user.lastname}</h3>
                  <h2>Email : {user.email}</h2>
                  {/* <input type='submit' value='Track' onClick={()=>this.addmember(club._id)}/> */}
                
                </Card>
              )
  
            })}
  
        </div>
      
      
      )
    }
  }

export default UserList
