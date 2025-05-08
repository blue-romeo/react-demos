import UpdateUser from './Components/UpdateUser';
import {UserProvider} from './Components/UserContext';
import UserProfile  from './Components/UserProfile';

const App = () => { 
  
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>      
  )
};

export default App; 