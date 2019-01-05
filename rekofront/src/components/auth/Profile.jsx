import React from 'react'
import {Link} from 'react-router-dom'
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import axios from 'axios'
import profPic from '../../images/san1.jpg'





const { Meta } = Card;

class Profile extends React.Component {

  state={
    user: {}
  }
  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else{
      this.setState({user})
    }
  }

  render() {

    const {user} = this.state

    return (
      <div className='profile'>
         <Card 
    hoverable
    style={{ width: 350, marginLeft: 100}}
    cover={<img alt="profPic" src={profPic} />}
  >
    <Meta
      title= {user.username}
      description= {user.email}
    />
  </Card>
      </div>
    );
  }
}



export default Profile