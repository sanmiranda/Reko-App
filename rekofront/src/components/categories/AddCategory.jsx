import React, { Component } from 'react'
import axios from 'axios'

class AddCategory extends Component {

  state = {
    name : "",
    numberRekosInCat : "",
    subCategory : "",
    numberSubCategories : "",
  }

  handleFormSubmit = (event)=> {
    event.preventDefault();
    const name = this.state.name;
    const numberRekosInCat = this.state.numberRekosInCat;
    const subCategory = this.state.subCategory;
    const numberSubCategories = this.state.numberSubCategories;
    axios.post('https://rekosmb.herokuapp.com/categories', {name, numberRekosInCat, subCategory, numberSubCategories})
    .then(()=>{
      this.props.getData();
      this.setState({
        name : "",
        numberRekosInCat : "",
        subCategory : "",
        numberSubCategories : "", 
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
          <input name='name' value={this.state.name} type='text' placeholder= 'categoria' onChange={this.handleChange}/>
          <input name='numberRekosInCat' value={this.state.numberRekosInCat} type='text' placeholder= 'rekos en cat' onChange={this.handleChange}/>
          <input name='subCategory' value={this.state.subCategory} type='text' placeholder='sub categoria' onChange={this.handleChange}/>
          <input name='numberSubCategories' value={this.state.numberSubCategories} type='text' placeholder= 'num sub cat' onChange={this.handleChange}/>
        </form>  
      </div>
    )
  }
}


export default AddCategory