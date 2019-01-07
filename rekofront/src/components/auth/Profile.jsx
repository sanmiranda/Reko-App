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
    reko: {}
  }
  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else{
      this.setState({user})
    }
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
    <Button className='profilebutton' type="primary" icon="plus" size={size}>Reko</Button>
    <Button className='profilebutton' type="primary" icon="plus" size={size}>Club</Button>
         </Card>
            <h2 className='buckettitle'style={{fontSize:40}}>Bucketlist</h2>
           <List className='bucketlist'//de los rekos en su bucketlist
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
            <List.Item
              key={reko.name}
              extra={<img width={150} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
             >
           <List.Item.Meta className='bucketlistCard'
              avatar={<Avatar src={user.img} />}
              title={<a href={item.href}>{reko.name}</a>}
              description= {reko.description}
          />
           </List.Item>
    )}
  />,
      <Card className='userrekos' //de los rekos del usuario
              style={{ width: 200}}
              cover={<img alt="example" src={reko.img} />}
              key={reko.img}>
               
             <Meta
               title={reko.name}
               description={reko.description}
                />
      </Card>
      </div>
    );
  }
}



export default Profile