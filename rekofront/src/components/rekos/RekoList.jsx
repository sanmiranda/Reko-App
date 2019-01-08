import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Card, Icon, Avatar} from 'antd';


const { Meta } = Card;

class RekoList extends Component {

  state= {
    list: [],
    rating: [],
    user:{},
    bucketlist:[]
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

    componentWillMount(){
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
      console.log(bucket)
      axios.put('http://localhost:3000/bucket', bucket)
       .then(response =>{
         console.log(response)
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
    const {user} = this.state
    console.log(this.state.list)
    return (
      <div className='homestyle'>
    
        <div>
          {this.state.list.map((reko, index)=>{
              return <Card 
              style={{ width:300}}
              cover={
              <img alt="example" src={reko.img} />
              }
              actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
              key={reko._id}>
               <Link to={`/rekos/${reko._id}`}>
             <Meta
              avatar={
                <Link to={`/profile/${user._id}`}>
              <Avatar src={reko.author ? reko.author.img : user.img} />
              </Link>}
               title={reko.name}
               description={reko.category}
                />
                </Link>
                {/* <Link to={`/rekos/${reko._id}`}/>
                <img src={reko.img} alt='reko'></img>
                <h2>Nombre : {reko.name}</h2>
                <h3>Categoria : {reko.category}</h3>
                <h3>Descripción : {reko.description}</h3> */}
                <h3>Autor : {reko.author ? reko.author.username : reko.author}</h3> 
                {/* <h3>Rating : {reko.rating}</h3> */}
                {/* <h3> Rating : ()=> this.calcrating(reko.rating)</h3> */}
                <button value='+ Bucketlist' onClick={()=>this.addToBucketlist(reko._id)}>
                + Bucketlist
                </button>
                <div className='botonesRating'>
                <div>
                  <button  onClick={()=>this.rating(3)}>
                  <Icon type="smile" />
                  </button>
                </div>
                <div>
                  <button  onClick={()=>this.rating(1)}>
                  <Icon type="meh" />
                  </button>
                </div>
                <div>
                  <button  onClick={()=>this.rating(0)}>
                  <Icon type="frown" />
                  </button>
                </div>
                </div>
              
               </Card>  
          })}
      </div>
    </div>
    )
  }
}


export default RekoList