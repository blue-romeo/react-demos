import React from 'react'

const UserStatus = () => {
    const LoggedIn = false;
    const isAdmin = true;

  if (LoggedIn === true && isAdmin === true) {
    return (
      <div>
        <h1>Welcome back, Admin!</h1>
        
      </div>
    )

    
  }

  else if (LoggedIn === true && isAdmin === false) {
    return (
      <div>
        <h1>Welcome back, User!</h1>
        
      </div>
    )
  } else {
    return (
      <div>
        <h1>Please log in.</h1>
        
      </div>
    )
  }
}

export default UserStatus
