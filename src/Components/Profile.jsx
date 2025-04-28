import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        age: ''
    });
    const handleChange = e =>{
        const {name, value} = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));

    }
  return (
    <div>
      <h2>User Profile:</h2>
      <label>
        Name:
        <input type='text' value={profile.name} name='name' onChange={handleChange}/>
      </label>
   
    
    
    <label>
        Age:
        <input type='text' value={profile.age} name='age' onChange={handleChange}/>
      </label>
    

    
        <h1>User info</h1>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
    </div>
  )
}

export default Profile
