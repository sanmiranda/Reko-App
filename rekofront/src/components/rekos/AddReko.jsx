import React, { Component } from 'react';
import axios from 'axios';
import {Cascader} from 'antd';
import {uploadFile} from '../../services/uploadfotos';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Link} from 'react-router-dom';

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
    const img = this.state.img;
    const name = this.state.name;
    const category = this.state.category;
    const description = this.state.description;
    const rating = this.state.rating;
    const author = this.state.user._id;
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
  componentWillMount(){
  const user = JSON.parse(localStorage.getItem('loggedUser'))
  if(!user) this.props.history.push('/login')
  else{
    this.setState({user})
  }
}
// addauthor = () => {
//   axios.put('http://localhost:3000/rekos/:id')
//    .then(response =>{
//      this.setState({$push:{author: this.user.id}})
//    })
//    .catch(e => console.log(e))
//  }
  
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
      <div className='homestyle2'>
            <div className='formulario'>
        <form onSubmit={this.handleFormSubmit} style={{width:"50%", margin:"auto"}}>
        <h1>Agregar Reko</h1>
        <div className="field">
        <label className="label">Subir Foto</label>
        <div className="control">
          <input name='img' type='file' placeholder= 'Subir Foto' onChange={this.handleImage}/>
          </div>
          </div>
          <div className="field">
          <label className="label">Titulo</label>
         <div className="control">
          <input name='name' value={this.state.name} type='text' placeholder= 'nombre' onChange={this.handleChange}/>
          </div>
          </div>
          <div className="field">
          <label className="label">Elegir Categoria</label>
         <div className="control">
          <Cascader style={{width:150}} options={categorias} onChange={this.handleSelectChange} placeholder="Please select" />
          </div>
          </div>
          <div className="field">
          <label className="label">Descripcion</label>
         <div className="control">
          <input name='description' value={this.state.description} type='text' placeholder='descripción' onChange={this.handleChange}/>
          </div>
          </div>
          {/* <Link to={`/profile/${user._id}`}> */}
          <input type='submit' />
          {/* </Link> */}
          {this.state.flagCreado &&  <Progress  style={{width:200}} percent={100} status="success" />   }
        </form> 
          </div>
      </div>
    )
  }
}

export default AddReko;