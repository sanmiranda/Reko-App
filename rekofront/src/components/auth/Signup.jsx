import React, { Component } from 'react'
import {signup} from '../../services/auth'
import {uploadFile} from '../../services/uploadfotos'



export default class Signup extends Component {
    state={
        user: {}
    }
    signup = (e) => {
        const { user } = this.state
        e.preventDefault()
        console.log(user)
        signup(user)
        .then(r => {
            console.log(r);
            this.props.history.push('/profile');
        })
        .catch(e => console.log(e))
    }
    
    handleText = (e) => {
        const { user } = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }

    handleImage = e => {
        console.log(e.target.files);
        const { user } = this.state;
        const file = e.target.files[0];
        uploadFile(file).then(link => {
          user['img']= link
          this.setState({ user });
          console.log("done");
        })
        .catch(e=>console.log(e))
      };
  render() {
    const {signup, handleText, handleImage} = this
    return (
      <div className='homestyle3'>
      <div className='formulario'>
        <form onSubmit={signup} style={{ margin:"auto", padding:"5% 3%"}}>
        <h1>Regístrate</h1>
        <div className="field">
        <label className="label">Nombre</label>
        <div className="control">
            <input onChange={handleText} name="name" className="input" type="text" placeholder="Nombre"/>
        </div>
        </div>
        <div className="field">
        <label className="label">Apellido</label>
        <div className="control">
            <input onChange={handleText} name="lastname" className="input" type="text" placeholder="Apellido"/>
        </div>
        </div>
        <div className="field">
        <label className="label">Nombre de Usuario</label>
        <div className="control">
            <input onChange={handleText} name="username" className="input" type="text" placeholder="Nombre de usuario"/>
        </div>
        </div>
        <div className="field">
        <label className="label">Correo</label>
        <div className="control has-icons-left has-icons-right">
            <input onChange={handleText} name="email" className="input" type="email" placeholder="reko@gmail.com"/>
        </div>
        </div>

        <div className="field">
        <label className="label">Contraseña</label>
        <div className="control has-icons-left has-icons-right">
            <input onChange={handleText} name="password" className="input" type="password" placeholder="Contraseña"/>
        </div>
        </div>
        <div className="field">
        <label className="label">Foto de Perfil</label>
        <div className="control has-icons-left has-icons-right">
        <input name='img' type='file' placeholder= 'Subir Foto' onChange={handleImage}/>
        </div>
        </div>


        <div className="field is-grouped">
            <div className="control">
                <button type="submit" className="button is-link">Registrar</button>
            </div>

        </div>
      </form>
      </div>
      </div>
    )
  }
}
