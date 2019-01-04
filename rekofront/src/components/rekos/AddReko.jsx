import React, { Component } from 'react';
import axios from 'axios';

class AddReko extends Component {
  state = {
    img : "",
    name: "",
    category : "",
    description : "",
    rating : "",
    // author: ""
  }
  
  handleFormSubmit= (event)=> {
    event.preventDefault();
    const img = this.state.img;
    const name = this.state.name;
    const category = this.state.category;
    const description = this.state.description;
    const rating = this.state.rating;
    const author = this.state.author;
    axios.post('http://localhost:3000/rekos', {img, name, category, description, rating, author})
    .then(()=>{
      this.props.getData();
      this.setState({
        img : "",
        name:"",
        category : "",
        description : "",
        rating : "",
        // author: "",
      })
    })
    .catch(e => console.log)

  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  


  
  render() {
    let categorias = [
 
      {
        value: 'Series'
      } ,
      {
        value: 'Libros'
      },
      {
        value: 'Peliculas'
      },
      {
        value: 'Restaurantes'
      },
    ]
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input name='img' value={this.state.img} type='file' placeholder= 'Subir Foto' onChange={this.handleChange}/>
          <input name='name' value={this.state.name} type='text' placeholder= 'nombre' onChange={this.handleChange}/>
          <select onChange={this.handleChange}>
          {categorias.map((cat, index)=>{
             return <option value={this.state.category} key={index}>{cat.value}</option> 
          })
          }  
          </select> 
          <input name='description' value={this.state.description} type='text' placeholder='descripción' onChange={this.handleChange}/>
          <input name='rating' value={this.state.rating} type='text' placeholder= 'rating' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>  
      </div>
    )
  }
}


export default AddReko;