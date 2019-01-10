import React, { Component } from 'react';
import axios from 'axios';
import {Cascader} from 'antd';
import {uploadFile} from '../../services/uploadfotos';
import "react-sweet-progress/lib/style.css";

class AddReko extends Component {
  state = {
    user:{},
    img : "",
    name: "",
    category : "",
    description : "",
    rating : "",
    author: "",
    flagCreado : false
  }
  
   handleFormSubmit= (event)=> {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    const img = this.state.img;
    const name = this.state.name;
    const category = this.state.category;
    const description = this.state.description;
    const rating = this.state.rating;
    const author = this.state.user._id;
    let flagCreado = this.state.flagCreado
    axios.post('https://rekosmb.herokuapp.com/rekos', {img, name, category, description, rating, author})
    .then(r =>{
      //this.props.getData();
      if(r.status === 201){
        this.props.history.push(`/profile/${user._id}`)
      } 
      //this.setState({flagCreado})
      this.setState({
        img : "",
        name:"",
        category : "",
        description : "",
        rating : "",
        author: "",
        flagCreado
      })
    })
    .catch(e => console.log(e))

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
  componentWillMount(){
  const user = JSON.parse(localStorage.getItem('loggedUser'))
  if(!user) this.props.history.push('/login')
  else{
    this.setState({user})
  }
}


  
  render() {
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
        const user = this.state.user
    return (
      <div className='homestyle3'>
            <div className='formulario'>
        <form onSubmit={this.handleFormSubmit} style={{ margin:"auto", padding:"5% 3%"}}>
        <h1>Agregar Reko</h1>
        <div className="field">
        <label className="label">Subir Foto</label>
        <div className="control">
          <input name='img' type='file' placeholder= 'Subir Foto' onChange={this.handleImage}/>
          </div>
          </div>
          <div className="field">
          <label className="label">Título</label>
         <div className="control">
          <input name='name' value={this.state.name} type='text' placeholder= 'Nombre' onChange={this.handleChange}/>
          </div>
          </div>
          <div className="field">
          <label className="label">Elegir Categoría</label>
         <div className="control">
          <Cascader style={{width:150}} options={categorias} onChange={this.handleSelectChange} placeholder="Seleccionar" />
          </div>
          </div>
          <div className="field">
          <label className="label">Descripción</label>
         <div className="control">
          <input name='description' value={this.state.description} type='text' placeholder=' Agregar descripción' onChange={this.handleChange}/>
          </div>
          </div>
          <br/>
          <input className='botonaddreko' type='submit' value= 'Agregar Reko' />
        </form> 
          </div>
      </div>
    )
  }
}

export default AddReko;