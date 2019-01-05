import React from 'react'
import {Link} from 'react-router-dom'
import {
  Skeleton, Switch, Card, Icon, Avatar, List
} from 'antd';
import axios from 'axios'
import profPic from '../../images/san1.jpg'





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
    return (
      <div className='profile'>
         <Card 
    hoverable
    style={{ width: 200, marginLeft: 100}}
    cover={<img alt="profPic" src={user.img} />}
  >
    <Meta
      title= {user.username}
      description= {user.email}
    />
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
        <List.Item.Meta
          avatar={<Avatar src={reko.img} />}
          title={<a href={item.href}>{item.title}</a>}
          description={reko.description}
        />
        {item.content}
      </List.Item>
    )}
  />,
      <Card //de los rekos del usuario
              style={{ width: 200}}
              cover={<img alt="example" src={reko.img} />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              key={reko._id}>
               
             <Meta
              avatar={<Avatar src={user.img} />}
               title={reko.name}
               description={reko.description}
                />
      </Card>
      </div>
    );
  }
}



export default Profile