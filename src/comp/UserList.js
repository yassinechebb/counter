import React from 'react'
import UserCard from './UserCard'

function UserList({user}) {
  return (
    <div>
        {user.map((el)=><UserCard el={el}/>)}
    </div>
  )
}

export default UserList