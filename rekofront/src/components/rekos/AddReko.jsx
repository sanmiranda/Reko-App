import React, { Component } from 'react';
import axios from 'axios';
import {Cascader} from 'antd';
import {uploadFile} from '../../services/uploadfotos'

class AddReko extends Component {
  state = {
    img : "",
    name: "",
    category : "",
    description : "",
    rating : "",
    author: null,
    //hits: null,
    flagCreado : false
  }

  
  
  handleFormSubmit= (event)=> {
    event.preventDefault();
    const img = this.state.img;
    const name = this.state.name;
    const category = this.state.category;
    const description = this.state.description;
    const rating = this.state.rating;
    const author = this.state.author;
    let flagCreado = this.state.flagCreado
    axios.post('http://localhost:3000/rekos', {img, name, category, description, rating, author})
    .then(()=>{
      //this.props.getData();
      flagCreado = true
      this.setState({flagCreado})
      this.setState({
        img : "",
        name:"",
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
  handleSelectChange = (value)=>{
    this.setState({category:value})
  }
 
  handleImage = e => {
    console.log(e.target.files);
    let { img } = this.state;
    const file = e.target.files[0];
    uploadFile(file).then(link => {
      img = link;
      this.setState({ img });
      console.log("done");
    })
    .catch(e=>console.log(e))
  };
  
  render() {
    
    const cachedHits = localStorage.getItem(this.input);
    if (cachedHits) {
      this.setState({ author: JSON.parse(cachedHits) });
      return;
    }
    const categorias = [{
      value: 'Series',
      label: 'Series',
    }, {
      value: 'Libros',
      label: 'Libros',
    },{
        value: 'Peliculas',
        label: 'Peliculas',
    },{
        value: 'Restaurantes',
        label: 'Restaurantes',    
    }];
   
    return (
      <div >
        <form onSubmit={this.handleFormSubmit}>
          <input name='img' type='file' placeholder= 'Subir Foto' onChange={this.handleImage}/>
          <input name='name' value={this.state.name} type='text' placeholder= 'nombre' onChange={this.handleChange}/>
          <Cascader style={{width:150}} options={categorias} onChange={this.handleSelectChange} placeholder="Please select" />
          <input name='description' value={this.state.description} type='text' placeholder='descripción' onChange={this.handleChange}/>
          <input type='submit'/>
          {this.state.flagCreado && <p>creado</p>}
        </form> 
    
      </div>
    )
  }
}

export default AddReko;