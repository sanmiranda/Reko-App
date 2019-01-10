import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Card, Icon, Avatar} from 'antd';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


const { Meta } = Card;

class RekoList extends Component {

  state= {
    list: [],
    rating: [],
    user:{},
    bucketlist:[],
    flagCreado : []
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

    componentWillMount(){
      this.getBucketRekos()
      this.getRekos()
        const user = JSON.parse(localStorage.getItem('loggedUser'))
        if(!user) this.props.history.push('/login')
        else{
          this.setState({user})
      }
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

     //a desarrollar mas adelante
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
    const {user, flagCreado} = this.state
    console.log(this.state)
    return (
      <div className='homestyle'>
        <div className='rekocard'>
          {this.state.list.map((reko, index)=>{
            
              return <Card classname='cardfondos' style={{marginTop: 30, borderRadius:8}}
              cover={
                <div className='padreImagenCard cardfondos'>
                 <Meta
              avatar={
                //id del autor no del user
                <Link to={`/profile/${reko.author ? reko.author._id : reko.author }`}>
              <Avatar src={reko.author ? reko.author.img : user.img} style={{marginTop:15, marginLeft:30, width:80, height:80}} />
              <h3 style={{marginTop:10, marginLeft:50, fontSize:20, color:'white'}}>{reko.author ? reko.author.username : reko.author} </h3>
              </Link>}
                />
              <img style={{borderRadius:8}} alt="rekopic" src={reko.img} />
              </div>
              }
              key={reko._id}>
              <div className='cardfondos'>
               <Link to={`/rekos/${reko._id}`}>
               <h2 style={{color:'white'}}>{reko.name}</h2>
               <h3 style={{color:'white'}}>{reko.category}</h3>
                </Link>
                <button  value='+ Bucketlist' onClick={()=>this.addToBucketlist(reko._id)}>
                + Bucketlist
                {flagCreado.includes(reko._id) &&  <Progress  style={{width:200}} percent={100} status="success" />   }
                </button>
                 </div>
               </Card>  
          })}
      </div>
    </div>
  
    )
  }
}


export default RekoList