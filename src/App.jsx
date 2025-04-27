import { useState } from "react";
import React from "react";

const App = () => {
  
const [movies, setMovies] = useState([
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "The Dark Knight", year: 2008 },
  { id: 4, title: "The Matrix", year: 1999 },
  { id: 5, title: "Pulp Fiction", year: 1994 }
]);
const handleClick = () => {
  setMovies(movies.map((movie) => (movie.id === 1 ? { ...movie, title: "Interstellar" } : movie)));
};
  return( 
    <section>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))};
     <button onClick={handleClick}>Change</button>
   
    </section>
  )
    
};
export default App;