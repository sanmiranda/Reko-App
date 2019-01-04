import React, { Component } from 'react'
import {Link} from 'react-router-dom'


 const Logout = () => {
   return(
   <div>
     <h2>Succesfully LoggedOut</h2>
     <Link to={'/'}>
        <button>Home</button>
        </Link>  
   </div>
   )
 }

 export default Logout;
