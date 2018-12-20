import React from 'react'
import {Link} from 'react-router-dom'



const displayAvartar = (user) => {
  if(user.avatarUrl){
    return <img src={user.avatarUrl} />
  } else {
    return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
  }
}


export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
            <div className="media">

            <div className="media-content">
                <p className="title is-4">Name: San</p>
                <p className="title is-4">Email: san@hotmail.com</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}