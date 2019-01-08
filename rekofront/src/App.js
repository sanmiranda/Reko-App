import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { Menu, Icon } from 'antd';
import fotoLogo from '../src/images/Copia de ReKoonlytext.png'
import fotoMini from '../src/images/Reko-mini.png'
import {Link} from 'react-router-dom';


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
        <Link to={"/"}>
        <img alt='logo' src={fotoLogo} style={{width : 100}}/>
        </Link>
        </Menu.Item>
        <Menu.Item key="signup">
        <Link to={'/signup'}>
          <Icon type="plus" />Signup
        </Link>
        </Menu.Item>
        <Menu.Item key="login">
        <Link to={'/login'}>
        <Icon type="login" />Login
        </Link>
        </Menu.Item>
        <Menu.Item key="rekos">
        <Link to={'/rekos'}>
          <Icon type="fire" />Rekos
        </Link>
        </Menu.Item>
        <Menu.Item key="logout">
        <Link to={'/logout'}>
        <Icon type="logout" />Logout
        </Link>
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="bars" />Categorias</span>}>
            <Menu.Item key="setting:1">Libros
            <Link to={'/rekos?category=Libros'}>
            </Link>
            </Menu.Item>
            <Menu.Item key="setting:2">Series
            <Link to={'/rekos?category=Series'}>
            </Link>
            </Menu.Item>
            <Menu.Item key="setting:3">Peliculas
            <Link to={'/rekos?category=Peliculas'}>
            </Link>
            </Menu.Item>
            <Menu.Item key="setting:4">Restaurantes
            <Link to={'/rekos?category=Restaurantes'}>
            </Link>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="profile">
        <Link to={'/profile'}>
        <Icon type="profile" />Mi Perfil
        </Link>
        </Menu.Item>
      </Menu>
      <Routes/>
      <Menu className='footer'
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="signup">
          <Link to={'/signup'}>
          <Icon type="plus" />Signup
          </Link>
        </Menu.Item>
        <Menu.Item key="login">
        <Link to={'/login'}>
        <Icon type="login" />Login
        </Link>
        </Menu.Item>
        <Menu.Item key="rekos">
        <Link to={'/rekos'}>
          <Icon type="fire" />Rekos
        </Link>
        </Menu.Item>
        <Menu.Item key="logout">
        <Link to={'/logout'}>
        <Icon type="logout" />Logout
        </Link>
        </Menu.Item>
        <Menu.Item key="logo">
        <Link to={"/"}>
        <img alt='logo' src={fotoMini} style={{width : 30}}/>
        </Link>
        </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default App;


