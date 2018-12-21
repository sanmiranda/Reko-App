import React, { Component } from 'react';
import axios from 'axios';

class AddReko extends Component {
  state = {
    img : "",
    category : "",
    description : "",
    rating : "",
    author: ""
  }
  
  handleFormSubmit= (event)=> {
    event.preventDefault();
    const img = this.state.img;
    const category = this.state.category;
    const description = this.state.description;
    const rating = this.state.rating;
    const author = this.state.author;
    axios.post('http://localhost:3000/rekos', {img, category, description, rating, author})
    .then(()=>{
      this.props.getData();
      this.setState({
        img : "",
        category : "",
        description : "",
        rating : "",
        author: "",
      })
    })
    .catch(e => console.log)

  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input name='img' value={this.state.img} type='text' placeholder= 'Subir Foto' onChange={this.handleChange}/>
          <input name='category' value={this.state.category} type='text' placeholder= 'categoria' onChange={this.handleChange}/>
          <input name='description' value={this.state.description} type='text' placeholder='descripción' onChange={this.handleChange}/>
          <input name='rating' value={this.state.rating} type='text' placeholder= 'rating' onChange={this.handleChange}/>
          <input name='author' value={this.state.author} type='text' placeholder= 'author' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>  
      </div>
    )
  }
}

export default AddReko;