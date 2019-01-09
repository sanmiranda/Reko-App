import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Card, Icon, Avatar} from 'antd';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


 const { Meta } = Card;


class RekoDetail extends Component {
  state={
    reko:{},
    list: [],
    rating: [],
    user:{},
    bucketlist:[],
    flagCreado : []
  }

  componentWillMount(){
    this.getReko()
    this.getBucketRekos()
    this.getRekos()
      const user = JSON.parse(localStorage.getItem('loggedUser'))
      if(!user) this.props.history.push('/login')
      else{
        this.setState({user})
    }
  }

  getReko = () => {
      const {id} = this.props.match.params
      axios.get('http://localhost:3000/rekos/' + id )
        .then(response =>{
          console.log(response)
          this.setState({reko: response.data})
        })
        .catch(e =>console.log(e))
    }


getRekos = () => {
  const {search} = this.props.location
  let url
  if(search) url = 'http://localhost:3000/rekos'+search
  else url = 'http://localhost:3000/rekos'
  axios.get(url)
    .then(response =>{
      this.setState({list: response.data})
      console.log(response.data)
    })
    .catch(e =>console.log(e))
}

getBucketRekos = () => {
  const user = JSON.parse(localStorage.getItem('loggedUser'))
  axios.get('http://localhost:3000/bucketrekos/' + user._id )
    .then(response =>{
      
      const {flagCreado} = this.state
      const bucketlist = response.data.bucketlist
      bucketlist.forEach(e=>{
        flagCreado.push(e._id)
      })
      this.setState({bucketlist, flagCreado})
    })
    .catch(e =>console.log(e))
}


  addToBucketlist = (rekoid) => {
    console.log(rekoid)
    const bucket ={user:this.state.user, rekoid}
    //let flagCreado = this.state.flagCreado
    const {flagCreado} = this.state
    flagCreado.push(rekoid)
    this.setState({flagCreado})
    console.log(flagCreado)
    axios.put('http://localhost:3000/bucket', bucket)
     .then(response =>{
      //flagCreado = true
      
       console.log(response)
     })
     .catch(e => console.log(e))
   }

  
  render() {
    const {user, flagCreado, bucketlist, reko} = this.state
    console.log(this.state)
    return (
      <div className='homestyle2'>
       <Card style={{margin: 5}}
              cover={
                <div className='padreImagenCard'>
                 <Meta
              avatar={
                //id del autor no del user
                <Link to={`/profile/${reko.author ? reko.author._id : reko.author }`}>
              <Avatar src={reko.author ? reko.author.img : user.img} />
              <h3>Autor : {reko.author ? reko.author.username : reko.author}</h3>
              </Link>}
                />
              <img alt="example" src={reko.img} />
              </div>
              }
              actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
              key={reko._id}>
               <Link to={`/rekos/${reko._id}`}>
               <h2>{reko.name}</h2>
               <h3> Categoria : {reko.category}</h3>
               <h4> Descripcion : {reko.description}</h4>
                </Link>
                <button  value='+ Bucketlist' onClick={()=>this.addToBucketlist(reko._id)}>
                + Bucketlist
                {flagCreado.includes(reko._id) &&  <Progress  style={{width:200}} percent={100} status="success" />   }
                </button>
                 
               </Card>  
          })}
      </div>
    
  
    )
  }
}
export default RekoDetail

