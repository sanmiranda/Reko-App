import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

import AddReko from './AddReko';

class RekoList extends Component {

  state= {
    list: []
  }


  getRekos = () => {
    axios.get('http://localhost:3000/rekos')
      .then(response =>{
        this.setState({list: response.data})
      })
      .catch(e =>console.log(e))
  }

    componentDidMount(){
      this.getRekos()
    }

  render() {
    return (
      <div>
        <div style={{width: '50%', float: 'left'}}>
          {this.state.list.map((reko, index)=>{
            return(
              <div key={reko._id}>
                <Link to={`/rekos/${reko._id}`}/>
                <img src={reko.img} alt='reko'></img>
                <h3>Categoria : {reko.category.name}</h3>
                <h3>Descripción : {reko.description}</h3>
                {/* <h3>Author : {reko.author.email}</h3> */}
                <h3>Rating : {reko.rating}</h3>
              </div>  
            )

          })}

      </div>
     
    </div>
    )
  }
}

export default RekoList