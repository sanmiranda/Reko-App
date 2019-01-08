import React from 'react'
import {Link} from 'react-router-dom'
import {
 Card, Icon, Avatar, List, Button, 
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
    reko: {},
    authorList:[],
    bucketlist:[]
  }
  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else{
      this.setState({user})
      this.getAuthorRekos(user._id)
      this.getBucketRekos(user._id)
    }
  }

  getAuthorRekos = (author) => {
    axios.get('http://localhost:3000/authorrekos/' + author )
      .then(response =>{
        this.setState({authorList: response.data})
      })
      .catch(e =>console.log(e))
  }

  getBucketRekos = (author) => {
    axios.get('http://localhost:3000/bucketrekos/' + author )
      .then(response =>{
        console.log(response.data.bucketlist)
        this.setState({bucketlist: response.data.bucketlist})
      })
      .catch(e =>console.log(e))
  }

  render() {
    

    const {user} = this.state
    const {reko} = this.state
    const size = this.state.size;
    return (
      <div className='profile'>
         
         <Card className='profilecard'
            hoverable
            style={{ width: 300, marginLeft: 50}}
            cover={<img alt="profPic" src={user.img} />}
           >
    <Meta
      title= {user.username}
      description= {user.email}
    />
    <p>{user.name}</p>
    <p>{user.lastname}</p>
    <Link to={'/addrekos'}>
    <Button 
    className='profilebutton' type="primary" icon="plus" size={size}>Reko
    </Button>
    </Link>
    <Button className='profilebutton' type="primary" icon="plus" size={size}>Club</Button>
         </Card>
            <h2 className='buckettitle'style={{fontSize:40}}>Bucketlist</h2>
           <List className='bucketlist'//de los rekos en su bucketlist
            itemLayout="vertical"
            size="large"
            dataSource={this.state.bucketlist}
            renderItem={reko => (
            <List.Item
              key={reko._id}
              extra={<img width={150} alt="logo" src={reko.img} />}
             >
           <List.Item.Meta className='bucketlistCard'
              avatar={<Avatar src={reko.author ? reko.author.img : reko.img} />}
              title={<a>{reko.name}</a>}
              description= {reko.description}
          />
           </List.Item>
    )}
  />
    <div>
       {this.state.authorList.map((reko, index)=>{ 
       return <Card className='userrekos' //de los rekos del usuario
              style={{ width: 200}}
              cover={<img alt="example" src={reko.img} />}
              key={reko._id}>
               
             <Meta
               title={reko.name}
               description={reko.description}
                />
      </Card>
       })}
      </div>
      </div>
    );
  }
}



export default Profile