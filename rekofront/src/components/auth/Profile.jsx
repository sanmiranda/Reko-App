import React from 'react'
import {Link} from 'react-router-dom'
import {
 Card, Icon, Avatar, List, Button,Row,Col 
} from 'antd';
import axios from 'axios'






const { Meta } = Card;

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class Profile extends React.Component {

  state={
    user: {},
    loggedUser:{},
    reko: {},
    authorList:[],
    bucketlist:[]
  }
  componentWillMount(){
    this.getUser()
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else{
      this.setState({loggedUser:user})
      this.getAuthorRekos()
      this.getBucketRekos()
    }    
  }

  componentWillReceiveProps(a){
    console.log(a)
    this.getUser()
    this.getAuthorRekos()
    this.getBucketRekos()
    
  }

  // componentWillUpdate(){
  //   this.getUser()
  // }

  getUser=()=>{
    const {id} = this.props.match.params
    axios.get('http://localhost:3000/users/' + id )
      .then(response =>{
        console.log(response)
        this.setState({user: response.data})
      })
      .catch(e =>console.log(e))
  }

  getAuthorRekos = (author) => {
    const {id} = this.props.match.params
    axios.get('http://localhost:3000/authorrekos/' + id )
      .then(response =>{
        this.setState({authorList: response.data})
      })
      .catch(e =>console.log(e))
  }

  getBucketRekos = (author) => {
    const {id} = this.props.match.params
    axios.get('http://localhost:3000/bucketrekos/' + id )
      .then(response =>{
        console.log(response.data.bucketlist)
        this.setState({bucketlist: response.data.bucketlist})
      })
      .catch(e =>console.log(e))
  }

  removeBucketReko = (bucketid) => {
    console.log('hola')
    const bid = bucketid
    const {id} = this.props.match.params
    axios.put('http://localhost:3000/bucket/' + id , {bid})
    .then(response =>{
      console.log(response.data.bucketlist)
      
      this.getBucketRekos()
    })
    .catch(e =>console.log(e))
}
  



  render() {
    

    const {user, loggedUser} = this.state
    
    const {reko} = this.state
    const size = this.state.size;
    return (
      <React.Fragment>
          <div className='profile'>
            <div className="portada">
              <div className='profilecard' style={{borderRadius:8}}>
              <br></br>
              <Card style={{padding:'0px !important'}}
                  hoverable
                  cover={<img className='fotoperfil' alt="profPic" src={user.img} />}
                >
                <p style={{fontSize:18}}> {user.username}</p>
                <p> {user.email} </p>
             
              <p>{user.name} {user.lastname}</p>
             
          
              </Card>
            </div>
          </div>
            {/* </div> */}
          <div className="flexi">
          <div className='misrekosttitle'>
            <div style={{display:"flex"}}>
              <h2 style={{fontSize:40, color:"white", marginRight:'15px'}}>Mis Rekos</h2> <Link to={'/addrekos'}>
              <Button 
              className='botonaddreko'> Agregar Reko
              </Button>
              </Link>
              </div>
            <div className='userRekos'>
          
              {this.state.authorList !== null ?
              this.state.authorList.map((reko, index)=>{ 
              return <Card style={{ margin:"30px", marginBottom:'30px', width:'200px'}} //de los rekos del usuario
                      cover={
                      <img style={{width:"100%",height:"100px"}} alt="rekopic" src={reko.img} />}

                      key={reko._id}>

                         <Link to={`/rekos/${reko._id}`}>
                          <h2 style={{color:"grey"}}>{reko.name}</h2>
                        </Link>
                        {/* <p >{reko.category}</p>  */}
                      
                  </Card>
                }): ''
                }
          
            </div>
          </div>
         
          <div className='buckettitle'>
            <h2 style={{fontSize:40}}>Bucketlist</h2>
            {this.state.bucketlist !== null && this.state.bucketlist.length > 0 ? 
              <List className='bucketlist'//de los rekos en su bucketlist
                itemLayout="vertical"
                size="large"
                dataSource={this.state.bucketlist}
                renderItem={reko => {
                  if (!reko) return<p></p>
                  return (
                <List.Item
                  key={reko?reko._id:''}
                  extra={<img width={'150px'} borderRadius={'8px'} height='170px' alt="logo" src={reko? reko.img:''} />
                
                }
                >
              <List.Item.Meta className='bucketlistCard'
                  avatar={
                    <Link to={`/profile/${reko.author ? reko.author._id : reko.author }`} >
                  <Avatar src={reko.author ? reko.author.img : reko.img} style={{width:80, height:80}} />
                  </Link>} 
              />
                <button onClick={()=>this.removeBucketReko(reko._id)} className='botonaddreko2' style={{backgroundColor:"#d8c361"}}>
                    Eliminar
                </button>
              <Link to={`/rekos/${reko._id}`}>
                <h2>{reko.name}</h2>
              </Link>
                <p style={{fontSize:'14px', color:'white'}}> {reko.category} </p>
              
              </List.Item>
              
        )}}
      />
      
 
      : <p>No has agregado nada aùn</p>}
      
            </div></div>
      </div>            
      </React.Fragment>
    );
  }
}



export default Profile