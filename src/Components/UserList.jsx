import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'johndoe@gmail.com' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@gmail.com' },
        { id: 3, name: 'Alice Johnson', email: 'alicejohnson@gmail.com' },
    ]
  return (
    <div>
      {users.map(user =>(
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList
