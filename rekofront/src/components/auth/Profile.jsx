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
              <div className='profilecard'>
              <Card 
                  hoverable
                  // style={{ width: 300, marginLeft: 50}}
                  cover={<img alt="profPic" src={user.img} />}
                >
              <Meta
                title= {user.elUsername}
                description= {user.email}
              />
              <p>{user.name}</p>
              <p>{user.lastname}</p>
          
              </Card>
            </div>
          </div>
            {/* </div> */}
          <div className="flexi">
          <div className='misrekosttitle'>
            <div style={{display:"flex"}}>
              <h2 style={{fontSize:40, color:"white"}}>Mis Rekos</h2> <Link to={'/addrekos'}>
              <Button 
              className='profilebutton' style={{backgroundColor:"#d8c361", border:"none", color:"black", marginTop:"20px", marginLeft:"10px", width:'100px'}} icon="plus" size={size}>Reko
              </Button>
              </Link>
              </div>
            <div className='userRekos'>
          
              {this.state.authorList !== null ?
              this.state.authorList.map((reko, index)=>{ 
              return <Card style={{width:150, height:"220px", margin:"10px"}} //de los rekos del usuario
                      cover={<img  alt="rekopic" src={reko.img} />}
                      key={reko._id}>

                        <Link to={`/rekos/${reko._id}`}>
                          <h2 style={{color:"grey"}}>{reko.name}</h2>
                        </Link>
                        <p>{reko.category}</p>
                      
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
                  extra={<img width={'150px'} height='100px' alt="logo" src={reko? reko.img:''} />
                
                }
                >
              <List.Item.Meta className='bucketlistCard'
                  avatar={
                    <Link to={`/profile/${reko.author ? reko.author._id : reko.author }`} >
                  <Avatar src={reko.author ? reko.author.img : reko.img} />
                  </Link>} 
              />
                <button onClick={()=>this.removeBucketReko(reko._id)} className='button' style={{backgroundColor:"#d8c361"}}>
                    - de Bucketlist
                </button>
              <Link to={`/rekos/${reko._id}`}>
                <h2>{reko.name}</h2>
              </Link>
                <p> {reko.category} </p>
              
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