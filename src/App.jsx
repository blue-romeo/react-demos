import Add from "./Components/Add";
import Footer from "./Components/Footer";
import Greet from "./Components/Greet";
import Greeting from "./Components/Greeting";
import Header from "./Components/Header";
import JSXRules from "./Components/JSXRules";
import Maincontent from "./Components/Maincontent";
import Person from "./Components/Person";
import Product from "./Components/Product";
import ProductInfo from "./Components/ProductInfo";
import ProductList from "./Components/ProductList";
import UserList from "./Components/UserList";
import WelcomeMessage from "./Components/WelcomeMessage";
const App = () => {
  return( 
    <div>
    <Person name="John Doe" age={30} />
    <Product name="Laptop" price={999.99} />
   
   

     
  
  </div>
  );
    
};
export default App;