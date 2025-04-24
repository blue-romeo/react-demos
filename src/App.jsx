import { useState } from "react";
import React from "react";

const App = () => {
  const [friend, setFriend] = useState(["John Doe", "Jane Smith", "Alice Johnson"]);
  const AddFriend = () => setFriend([...friend, "James Bond"]);
  const RemoveFriend = () => setFriend(friend.filter((f) => f !== "James Bond"));
  const UpdateFriend = () => setFriend(friend.map((f) => f==="John Doe" ? "John Wick" : f));


  return( 
    <section>
    {friend.map( f => (
      <li key={Math.random()}> {f} </li>
    ))}

   <button onClick={AddFriend}>Add Friend</button>
   <button onClick={RemoveFriend}>Remove Friend</button>
   <button onClick={UpdateFriend}>Update Friend</button>

    </section>
  )
    
};
export default App;