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
                this.props.history.push('/profile')
            }
          
         
        })
        .catch(e => console.log(e))
    }
    render() {
      const {login, handleText} = this
    return (
      <div className='homestyle'>
      <form onSubmit={login} style={{width:"50%", margin:"auto"}}>
      <h1>Login</h1>

      <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left has-icons-right">
          <input onChange={e=> handleText(e)} className="input" name="email" type="email" placeholder="darthVader@gmail.com"/>
      </div>
      </div>

      <div className="field">
      <label className="label">Password</label>
      <div className="control has-icons-left has-icons-right">
          <input onChange={e=> handleText(e)} className="input" name="password" type="password"/>
      </div>
      </div>


      <div className="field is-grouped">
          <div className="control">
              <button type="submit" className="button is-link">Submit</button>
          </div>

      </div>
    </form>
    </div>
  )
}
}
export default Login