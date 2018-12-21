import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import AddCategory from './AddCategory';


class ListCategories extends Component {

  state={
    list:[]
  }

  getCategories = () => {
    axios.get('http://localhost:3000/categories')
      .then(response =>{
        this.setState({list: response.data})
      })
      .catch(e => console.log(e))
  }

  componentDidMount(){
    this.getCategories()
  }  

  render() {
    return (
      <div>
               <div style={{width: '50%', float: 'left'}}>
          {this.state.list.map((category, index)=>{
            return(
              <div key={category._id}>
                <Link to={`/categories/${category._id}`}/>
                <h3>Categoria : {category.name}</h3>
                <h4>Numero de Rekos: {category.numberRekosInCat}</h4>
                <h3>Sub Categorias : {category.subCategories}</h3>
                <h2>Numero de Sub Categorias : {category.numberSubCategories}</h2>
              </div>  
            )

          })}

            </div>
         
      </div>
    )
  }
}
  
   
   export default ListCategories