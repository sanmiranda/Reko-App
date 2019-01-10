import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { Menu, Icon } from 'antd';
import fotoLogo from '../src/images/Copia de ReKoonlytext.png'
import fotoMini from '../src/images/Reko-mini.png'
import {Link} from 'react-router-dom';
import {logout} from '../src/services/auth'

const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    current: 'mail',
    user:{},
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  logout = e => {
    const { user } = this.state;
    e.preventDefault();
    logout(user)
      .then(r => {
        console.log("Deslogeado", r);
        localStorage.clear();
      })

      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(user) this.setState({user})
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
          <Icon type="plus" />Regístrate
        </Link>
        </Menu.Item>
        <Menu.Item key="login">
        <Link to={'/login'}>
        <Icon type="login" />Inicia Sesión
        </Link>
        </Menu.Item>
        <Menu.Item key="rekos">
        <Link to={'/rekos'}>
          <Icon type="fire" />Rekos
        </Link>
        </Menu.Item>
        <Menu.Item key="logout">
        <Link to={'/'} onClick={this.logout}>
        <Icon type="logout" />Salir
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
            <Menu.Item key="setting:3">Películas
            <Link to={'/rekos?category=Peliculas'}>
            </Link>
            </Menu.Item>
            <Menu.Item key="setting:4">Restaurantes
            <Link to={'/rekos?category=Restaurantes'}>
            </Link>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="profile">
        <Link to={'/profile/' + this.state.user._id }>
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
          <Icon type="plus" />Regístrate
          </Link>
        </Menu.Item>
        <Menu.Item key="login">
        <Link to={'/login'}>
        <Icon type="login" />Inicia Sesión
        </Link>
        </Menu.Item>
        <Menu.Item key="rekos">
        <Link to={'/rekos'}>
          <Icon type="fire" />Rekos
        </Link>
        </Menu.Item>
        <Menu.Item key="logout">
        <Link to={'/'} onClick={this.logout}>
        <Icon type="logout" />Salir
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


