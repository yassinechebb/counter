import React from 'react'
import './cardd.css'
import UserList from './UserList'
function UserCard({el}) {
  return (
    <div><div className="container" style={{ marginTop: 50 }}>
    <div className="row">
      <div className="col-md-3">
        <div className="card-sl">
          
          <a className="card-action" href="#">
            <i className="fa fa-heart" />
          </a>
          <div className="card-heading">{el.name}</div>
          <div className="card-text">
           {el.email}
          </div>
          <div className="card-text">{el.address.geo.lng}</div>
          <a href="#" className="card-button">
            {" "}
            {el.address.zipcode}
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default UserCard