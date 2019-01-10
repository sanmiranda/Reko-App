import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {login} from '../../services/auth'



class Login extends Component {
    state={
        user: {}
    }

    handleText = (e) => {
        const { user } = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }

    login = (e) => {
        const { user } = this.state
        e.preventDefault()
        login(user)
        .then(r => {
            console.log(r)
            if(r.status === 500 || r.status === 404 )
            {
                console.log('Revisar Contraseña')
                alert('Contraseña Incorrecta')
                
            }
            else{
                localStorage.setItem('loggedUser', JSON.stringify(r))
                this.props.history.push('/profile/'+r._id)
            }
          
         
        })
        .catch(e => console.log(e))
    }
    render() {
      const {login, handleText} = this
    return (
      <div className='homestyle3'>
      <div className='formulario'>
      <form onSubmit={login} style={{ margin:"auto", padding:"5% 3%"}}>
      <h1>Iniciar Sesíon</h1>

      <div className="field">
      <label className="label">Correo</label>
      <div className="control has-icons-left has-icons-right">
          <input onChange={e=> handleText(e)} className="input" name="email" type="email" placeholder="reko@gmail.com"/>
      </div>
      </div>

      <div className="field">
      <label className="label">Contraseña</label>
      <div className="control has-icons-left has-icons-right">
          <input onChange={e=> handleText(e)} className="input" name="password" placeholder='Contraseña' type="Contraseña"/>
      </div>
      </div>


      <div className="field is-grouped">
          <div className="control">
              <button type="submit" className="button is-link">Iniciar</button>
          </div>

      </div>
    </form>
    </div>
    </div>
  )
}
}
export default Login