import React, { Component } from 'react'
// import { Link } from 'react-router-dom'


export default class Home extends Component {
    
    state = {
        data: {}
    }
    
    
    render() {
    return (
      <div>
       <h1>Welcom to Reko</h1>
       <img src="./images/ReKoonlytext.png" alt="logo"/>
      </div>
    )
  }
}
