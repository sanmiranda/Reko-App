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
                <img src={reko.img}></img>
                <h3>{reko.category}</h3>
                <h4>{reko.description}</h4>
                <h3>{reko.author}</h3>
                <h2>{reko.rating}</h2>
              </div>  
            )

          })}

      </div>
        <div style={{width: "50%", float: "right"}}><AddReko //hijo de RekoList 
        getData={()=> this.getRekos}/></div>
    </div>
    )
  }
}

export default RekoList