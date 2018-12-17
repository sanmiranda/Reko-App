import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {signup} from '../../services/auth'

export default class Signup extends Component {
    state={
        user: {}
    }
    signup = (e) => {
        const { user } = this.state
        e.preventDefault()
        signup(user)
        .then(r => {
            this.props.history.push('/profile')
            console.log(r)
        })
        .catch(e => console.log(e))
    }
    
    handleText = (e) => {
        const { user } = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }
  render() {
    const {signup, handleText} = this
    return (
      <div>
        <form onSubmit={signup} style={{width:"50%", margin:"auto"}}>
        <h1>Sign Up</h1>
        <div className="field">
        <label className="label">Username</label>
        <div className="control">
            <input onChange={handleText} name="name" className="input" type="text" placeholder="write username here"/>
        </div>
        </div>

        <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
            <input onChange={handleText} name="email" className="input" type="email" placeholder="reko@gmail.com"/>
        </div>
        </div>

        <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
            <input onChange={handleText} name="password" className="input" type="password"/>
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
