import React from 'react'
import {Link} from 'react-router-dom'
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import axios from 'axios'







const displayAvartar = (user) => {
  if(user.avatarUrl){
    return <img src={user.avatarUrl} alt='mini' />
  } else {
    return <img src='../../../public/images/Reko-mini.png' alt='mini' width='300' height='300'/>
  }
}

const { Meta } = Card;

class Profile extends React.Component {

  state={
    user: {}
  }
 

  render() {


    return (
      <div>
          {/* <img src= "../../../public/images/Reko-mini.png" alt='reko'></img>
        <Card style={{ width: 300, marginTop: 16 }} >
          <Meta
            
         

            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Skeleton avatar active>
            <Meta
              avatar={<Avatar src="../../../public/images/Reko-mini.png" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card> */}
         <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
      </div>
    );
  }
}



export default Profile