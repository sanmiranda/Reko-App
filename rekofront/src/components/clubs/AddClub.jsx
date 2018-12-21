import React, { Component } from 'react'
import axios from 'axios';

class AddClub extends Component {

  state = {
    name : "",
    description : "",
    members : "",
    category : ""
  }

  handleFormSubmit = (event)=> {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const members = this.state.members;
    const category = this.state.category;
    axios.post('http://localhost:3000/clubs', {name, description, members, category})
    .then(()=>{
      this.props.getData();
      this.setState({
        name : "",
        description : "",
        members : "",
        category : "" 
      })
    })
    .catch(e=> console.log)
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
           <form onSubmit={this.handleFormSubmit}>
          <input name='name' value={this.state.name} type='text' placeholder= 'nombre del club' onChange={this.handleChange}/>
          <input name='description' value={this.state.description} type='text' placeholder= 'descripción de club' onChange={this.handleChange}/>
          <input name='members' value={this.state.members} type='text' placeholder='miembros' onChange={this.handleChange}/>
          <input name='category' value={this.state.category} type='text' placeholder= 'categoria del club' onChange={this.handleChange}/>
        </form>   
      </div>
    )
  }
}

export default AddClub