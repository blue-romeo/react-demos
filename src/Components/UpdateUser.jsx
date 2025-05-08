import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react';
import { BiHandicap } from 'react-icons/bi';

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newName.trim()){
            updateUser(newName);
            setNewName('');
        }
        
    }

  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter new name" />
        <button onClick={() => updateUser(newName)}>Update Name</button>
        </form>
      
    </div>
  )
}

export default UpdateUser
