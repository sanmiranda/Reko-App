



render() {
  return (
    <div>
      <form onSubmit={signup} style={{width:"50%", margin:"auto"}}>
      <h1>Sign Up</h1>
      <div className="field">
      <label className="label">Name</label>
      <div className="control">
          <input onChange={handleText} name="name" className="input" type="text" placeholder="write Name here"/>
      </div>
      </div>
      <div className="field">
      <label className="label">Last Name</label>
      <div className="control">
          <input onChange={handleText} name="lastname" className="input" type="text" placeholder="write Last Name here"/>
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
