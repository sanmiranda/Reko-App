import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


class ClubList extends Component {

  state = {
    list: [],
    members:[]
  }

  getClubs = () => {
    axios.get('http://localhost:3000/clubs')
      .then(response => {
        this.setState({list: response.data})
      })
      .catch(e => console.log(e))
  }

    componentDidMount(){
      this.getClubs()
    }

     addmember = () => {
       axios.put('http://localhost:3000/clubs/:id')
        .then(response =>{
          this.setState({$push:{members: response.data}})
        })
        .catch(e => console.log(e))
      }
     

  render() {
    return (
      <div>
          <div style={{width: '50%', float: 'left'}}>
          {this.state.list.map((club, index)=>{
            return(
              <div key={club._id}>
                <Link to={`/clubs/${club._id}`}/>
                <h3>Club : {club.name}</h3> 
                <h4>Descripción : {club.description}</h4>
                <h3>Miembros : {club.members.email}</h3>
                <h2>Categoria : {club.category.name}</h2>
                <input type='submit' value='Unirme' onClick={()=>this.addmember(club._id)}/>
              </div>  
            )

          })}

      </div>
    
    </div>
    )
  }
}


export default ClubList