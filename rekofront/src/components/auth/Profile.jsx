import React from 'react'
import {Link} from 'react-router-dom'
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';





// const displayAvartar = (user) => {
//   if(user.avatarUrl){
//     return <img src={user.avatarUrl} />
//   } else {
//     return <img src='../../../public/images/Reko-mini.png' width='300' height='300'/>
//   }
// }
const { Meta } = Card;

class Profile extends React.Component {
  state = {
    loading: true,
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={<Avatar src="../../../public/images/Reko-mini.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </div>
    );
  }
}

export default Profile