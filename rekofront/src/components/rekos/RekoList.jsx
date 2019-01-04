import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Card} from 'antd';


class RekoList extends Component {

  state= {
    list: [],
    rating: []
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

    addToBucketlist = () => {
      axios.put('http://localhost:3000/user/:id')
       .then(response =>{
         this.setState({$push:{bucketlist: response.data}})
       })
       .catch(e => console.log(e))
     }
    //  rating = () => {
    //    axios.put('http://localhost:3000/rekos/:id')
    //    .then(response =>{
    //      this.setState({$push:{rating: response.data}})
    //    })
    //    .catch(e => console.log(e))
    //  }

    //  calcrating =() =>{
    //    axios.get('http://localhots:3000/rekos/:id')
    //    .then(response =>{
    //      this.setState({sumar:{rating: response.data}})
    //    })
    //  }

  render() {
    return (
      <div>
        <div style={{width: '50%', float: 'left'}}>
          {this.state.list.map((reko, index)=>{
              return <Card
              key={reko._id}>
                <Link to={`/rekos/${reko._id}`}/>
                <img src={reko.img} alt='reko'></img>
                <h2>Nombre : {reko.name}</h2>
                <h3>Categoria : {reko.category}</h3>
                <h3>Descripción : {reko.description}</h3>
                {/* <h3>Author : {reko.author.email}</h3> */}
                {/* <h3>Rating : {reko.rating}</h3> */}
                {/* <h3> Rating : ()=> this.calcrating(reko.rating)</h3> */}
                <input type='submit' value='+ Bucketlist' onClick={()=>this.addToBucketlist(reko._id)}/>
                <div>
                  <button  onClick={()=>this.rating(3)}>Like</button>
                </div>
                <div>
                  <button  onClick={()=>this.rating(1)}>Igual</button>
                </div>
                <div>
                  <button  onClick={()=>this.rating(0)}>disLike</button>
                </div>
              
               </Card>  
          })}
      </div>
    </div>
    )
  }
}


export default RekoList