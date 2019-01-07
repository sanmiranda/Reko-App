import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { Menu, Icon } from 'antd';
import fotoLogo from '../src/images/Copia de ReKoonlytext.png'
import fotoMini from '../src/images/Reko-mini.png'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
          <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="logo">
        <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">
        <img alt='logo' src={fotoLogo} style={{width : 100}}/>
        </a>
        </Menu.Item>
        <Menu.Item key="signup">
          <Icon type="plus" />Signup
        </Menu.Item>
        <Menu.Item key="login">
        <Icon type="login" />Login
        </Menu.Item>
        <Menu.Item key="rekos">
          <Icon type="fire" />Rekos
        </Menu.Item>
        <Menu.Item key="logout">
        <Icon type="logout" />Logout
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="bars" />Categorias</span>}>
            <Menu.Item key="setting:1">Libros</Menu.Item>
            <Menu.Item key="setting:2">Series</Menu.Item>
            <Menu.Item key="setting:3">Peliculas</Menu.Item>
            <Menu.Item key="setting:4">Restaurantes</Menu.Item>
        </SubMenu>
      </Menu>
      <Routes/>
      <Menu className='footer'
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="signup">
          <Icon type="plus" />Signup
        </Menu.Item>
        <Menu.Item key="login">
        <Icon type="login" />Login
        </Menu.Item>
        <Menu.Item key="rekos">
          <Icon type="fire" />Rekos
        </Menu.Item>
        <Menu.Item key="logout">
        <Icon type="logout" />Logout
        </Menu.Item>
        <Menu.Item key="logo">
        <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">
        <img alt='logo' src={fotoMini} style={{width : 30}}/>
        </a>
        </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;


